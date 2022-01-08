import React, { useRef } from 'react'
import "./styles.css"

interface Props{
    todo: string | number;
    setTodo: React.Dispatch<React.SetStateAction<string | number>>;
    handleAdd:(e: React.FormEvent)=> void;
}

const InputField = ({todo, setTodo, handleAdd}: Props) => {
    
    const inputRef = useRef<HTMLInputElement>(null)
    
    return (
        <div>
            <form className='input' onSubmit={(e)=>{
                    handleAdd(e)
                    inputRef.current?.blur()}}>
                <input type="input" placeholder='Enter Item' className='input__box' 
                    ref={inputRef}
                    value={todo}
                    onChange={
                        (e)=>setTodo(e.target.value)
                    }/>
                <button className='button__submit' type='submit'>Enter</button>
            </form>
        </div>
    )
}

export default InputField
