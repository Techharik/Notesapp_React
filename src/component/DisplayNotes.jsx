import React, { useContext } from 'react'
import contextTodo from './context/context'
import { REMOVE_TODO } from './action.types'

function DisplayNotes() {
    const {todos,dispatch}  =useContext(contextTodo)
  return (
    <div className='grid grid-cols-3 gap-1 m-10'>
        {
            todos.map((todo,index)=>{
              return (
                <div key={index} className='rounded border-2 p-[20px]'>
                    <h1>{todo}</h1>
                    <button onClick={()=>{
                      return dispatch({
                        type:REMOVE_TODO,
                        payload:todo
                      })
                    }}>x</button>
                </div>
              )
            })
        }
    </div>
  )
}

export default DisplayNotes