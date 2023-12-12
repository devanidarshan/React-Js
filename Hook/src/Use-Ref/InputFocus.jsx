import { useState } from "react";
import { useRef } from "react"

const InputFocus = () => {

     const inputRef = useRef("Darshan")
     console.log(inputRef);

      function reset(){
        setName("")
        inputRef.current.focus()
        inputRef.current.style.color = "black"
        inputRef.current.style.textDecoration = "none"
      }

      function handleClick(){
        inputRef.current.style.color = "green"
        inputRef.current.style.textDecoration = "underline"
      }

     const [name , setName] = useState("Darshan")

    
    
    return (
      <div className="flex items-center justify-center">
      <input className="w-[250px] h-[30px]" ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value) }/>
      <button className="button" onClick={reset}>Reset</button>
      <button className="button" onClick={handleClick}>handleInput</button>
    </div>
  )
}

export default InputFocus