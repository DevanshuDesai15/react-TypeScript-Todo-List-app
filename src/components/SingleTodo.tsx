import React, {useState, useRef, useEffect} from 'react'
import { Todo } from './model'
import {MdOutlineDoneAll} from 'react-icons/md'
import {FiEdit3} from 'react-icons/fi'
import {FiDelete} from 'react-icons/fi'
import TodoList from './TodoList'

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string | number>(todo.todo)

    const handleDone = (id:number) =>{
        setTodos(todos.map((todo)=> todo.id === id?{...todo, isDone: !todo.isDone}: todo)
        )}
    
    const handleDelete = (id:number) =>{
        setTodos(todos.filter((todo)=> todo.id !== id))
    }

    const handleEdit =(e: React.FormEvent, id:number) =>{
        e.preventDefault()

        setTodos(todos.map((todo)=> (
            todo.id === id?{...todo,todo:editTodo}:todo
        )))
        setEdit(false);
    }
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])

    
    return (
        <form className='todos__single' onSubmit={(e)=> handleEdit(e,todo.id)}>
            {
                edit ? (
                    <input ref={inputRef} className='todos__single--text' value={editTodo} onChange={(e)=>setEditTodo(e.target.value)}/>
                ):(
                    
                        todo.isDone ? (
                            <s className="todos__single--text">
                                {todo.todo} 
                            </s>
                        ):(
                            <span className="todos__single--text">
                                {todo.todo} 
                            </span>
                        )
                
                )
            }

            <div>
                <span className="icon" onClick={ ()=>{
                    if(!edit && !todo.isDone){
                        setEdit(!edit);
                    }
                }}><FiEdit3/></span>
                <span className="icon" onClick={()=>handleDelete(todo.id)}><FiDelete/></span>
                <span className="icon" onClick={()=>handleDone(todo.id)} ><MdOutlineDoneAll/></span>
            </div>
        </form>
    )
}

export default SingleTodo
