import React, { useState } from 'react';
import { createLogicalOr } from 'typescript';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  
  const [todo, setTodo] = useState<string | number>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const handleAdd = (e: React.FormEvent) =>{
      e.preventDefault()

      if(todo){
        setTodos([...todos, { id:Date.now(), todo, isDone:false}])
        setTodo("")
      }
  }

  console.log(todos);
  

  return (
    <div className="App">
      <span className='heading'>Todo-List</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
