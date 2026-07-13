import React, { useEffect, useState } from 'react'
import { CirclePlus, Delete } from "lucide-react"
import "./App.css"

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
      <form onSubmit={handleSubmit} className='form'>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit'>
          <CirclePlus />
        </button>
      </form>

      <div className='todos_container'>
        {todos.map((todo, index) => {
          return (
            <div key={index} className='todo_item'>
              <input type='radio' />
              <p>{todo}</p>
              <Delete onClick={() => handleDelete(todo)}/>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default App