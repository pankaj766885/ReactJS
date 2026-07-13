import React, { useState } from 'react'
import "../styles/todos.css"

const Todos = () => {
    const data = useState
  return (
    <div className='todos_container'>
        <h1 className='heading'>Todos</h1>

        <div className='form'>
            <input />
            <button>+</button>
        </div>
    </div>
  )
}

export default Todos
// hook
// useState, useEffect, useMemo, useCallback, useReducer
// custom hook
// useData, useProduct