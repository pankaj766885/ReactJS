import React, { useEffect, useState } from 'react'
import { CirclePlus, Delete } from "lucide-react"
import "./App.css"

// update todo
// store and recover

const App = () => {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])

  console.log(todos)

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, input])
    setInput("")
  }

  const handleDelete = (task) => {
    const updatedTodos = todos.filter(v => v !== task)
    setTodos(updatedTodos)
  }

  return (
    <div className='App'>
      <h1 className='todo'>TODO</h1>

      <form  onSubmit={handleSubmit} >
        <input className="inputbox"value={input} placeholder='Add a todo item...' onChange={(e) => setInput(e.target.value)} />
        <button className='button'  type='submit'>
          <CirclePlus />
        </button>
      </form>

      <div className='todos_container'>
        {todos.map((todo, index) => {
          return (
            <div key={index} className='todo_item'>
              <input type='checkbox' />
              <p className='line'>{todo}</p>
              <Delete className='delet' onClick={() => handleDelete(todo)}/>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default App