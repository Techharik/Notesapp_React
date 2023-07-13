import React, { useReducer } from "react";
import Formsu from "./component/Formsu";
import contextTodo from './component/context/context'
import reducer from './component/reducer'
import DisplayNotes from './component/DisplayNotes'


function App() {
   const [todos,dispatch]=useReducer(reducer,[])

   console.log(useReducer(reducer,[]))

  return (
    <contextTodo.Provider value={{todos,dispatch}}>


    <>
     <h1 className="text-3xl font-bold underline text-center">Notes App</h1>
      <Formsu />
      <DisplayNotes />
    </> 
    </contextTodo.Provider>
   
    
  );
}

export default App;
