import React, {useState, useEffect}from 'react'
import './Todo.css'

function Todo() {


// const handleSubmit = (e)=>{
//   e.preventDefault()
// }
  return (
    <div>
      <input type="text" name='todo'/>
      <button>Add Todo</button>
      <ul>
        <li></li>
      </ul>
    </div>
  )
}

export default Todo