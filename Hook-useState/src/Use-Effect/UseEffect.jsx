import React from 'react'
import { useEffect , useState } from 'react';

const UseEffect = () => {

    const [count, setCount] = useState(0); 
  
    useEffect(() => { 
        document.title = `You clicked ${count} times`; 
        console.log(count);
    }, [count]); 
  
  return (
    <div>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}> 
                Click {count} times{" "} 
            </button> 
    </div>
  )
}

export default UseEffect
