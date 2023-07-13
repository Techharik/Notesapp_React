import React, { useContext, useState } from 'react'
import contextTodo from './context/context'
import { ADD_TODO } from './action.types'

function Formsu() {
  const {todos,dispatch} =useContext(contextTodo)
  const [todoString,setTodoString]=useState('')


  const handleClick=(e)=>{
    e.preventDefault();
    
   if(todoString == ''){
    return alert('Please enter todo to add')
   }

   dispatch({
     type:ADD_TODO,
     payload:todoString
   })

   setTodoString('')
  console.log(todos)
  }

  return (
    <>
    <form className='text-center m-4' onSubmit={handleClick}>
        <input  type='text' placeholder='Enter Notes' className='border-4 p-2 rounded'
         onChange={(e)=>setTodoString(e.target.value)}
         value={todoString}
        
        />
        <button className='bg-orange-500 p-2 rounded ml-2'>Click</button>
    </form>
    
    </>
  )
}

export default Formsu