import React, { useReducer, useState } from "react";
import Formsu from "./component/Formsu";
import contextTodo from './component/context/context'
import reducer from './component/reducer'
import DisplayNotes from './component/DisplayNotes'


function App() {
   const [todos,dispatch]=useReducer(reducer,[])
   const[theme,updateTheme]=useState('light')

  //  console.log(useReducer(reducer,[]))

  return (
    <contextTodo.Provider value={{todos,dispatch,themes:[theme,updateTheme]}}>


    <div className={theme === 'light' ? 'bg-black':''}>
     <h1 className="text-3xl font-bold underline text-center">Notes App</h1>
      <Formsu />
      <DisplayNotes />
    </div> 
    </contextTodo.Provider>
   
    
  );
}

export default App;
