import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo } from './todoSlice'
import { v4 as uuidv4 } from 'uuid';

export function Todo() {
  const todo = useSelector((state) => state.todos.value)
  const dispatch = useDispatch()
const [input, setInput] = useState("")
  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={()=>{
            dispatch(addTodo({name:input,id:uuidv4()}))
            setInput("")
        }}>add</button>
       
        <ul>
        {
          todo.map((x)=>(
            <li style={{cursor:"pointer"}} onClick={()=>dispatch(removeTodo(x.id))} key={uuidv4()}>{x.name}</li>
          ))  
        }
        </ul>
    </div>
  )
}