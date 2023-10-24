import React from 'react'

export const Todoitem = ({todo , onDelete}) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={ ()=>{onDelete(todo)}}>delete</button>
    </div>
  )
}
