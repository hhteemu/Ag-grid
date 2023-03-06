import React, { useState } from 'react';
import { useRef } from 'react';
import TodoTable from './TodoTable'

function TodoList() {
  const [todo, setTodo] = useState({desc: '', date: '', prio: ''});
  const [todos, setTodos] = useState([]);
  const gridRef = useRef()


  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    console.log(todos)
  }

  const deleteTodo = () => {
    if (gridRef.current.getSelectedRows().length > 0) {
      setTodos(todos.filter((todo, index) =>
      index !== gridRef.current.getSelectedNodes()[0].childIndex))
      }
      else {
        alert('Select row first');
      }
    }
    

  return (
    <div align="center">
      <input name="date" type="text" onChange={inputChanged} placeholder="Date" value={todo.date}/>  
      <input name="desc" type="text" onChange={inputChanged} placeholder="Description" value={todo.desc}/>
      <input name="prio" type="text" onChange={inputChanged} placeholder="Priority" value={todo.prio}/>
      <button onClick={addTodo}>Add</button>
      <button onClick={deleteTodo}>Delete</button>
      <TodoTable todos={todos} gridRef={gridRef} deleteTodo={deleteTodo}/>
    </div>
  );
};

export default TodoList;