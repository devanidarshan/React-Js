import { useState } from "react"

const UseStates2 = () => {

    const [age , setAge] = useState(18);
    const [name , setName] = useState("John");
    const [name1 , setNames] = useState("John");
    const [todos , setTodos] = useState("Daily Worked Assign To John!");

    function setAges(){
         setAge(age + 1)
    }

    function setNames1(){
         setName("Adam")
    }
    function setNames2(){
         setNames("Maria")
    }

    function viewTodos(){
         setTodos("Daily Worked Assign To maria!")
         setTodos("Daily Worked Assign To Adam!")
         setTodos("Daily Worked Assign To Jack!")
    }

    function Reset(){
         setAge(18)
         setName("John")
         setNames("John")
         setTodos("Daily Worked Assign To John!")
    }

  return (
    <>
     <div className="flex mt-40 p-2 bg-slate-600 rounded-2xl">
      <button className="button" onClick={setAges}>{age}</button>
      <button className="button" onClick={setNames1}>{name}</button>
      <button className="button" onClick={setNames2}>{name1}</button>
      <button className="button" onClick={viewTodos}>{todos}</button>
      <button className="button" onClick={Reset}>Reset</button>
    </div>
    </>
  )
}

export default UseStates2
