import React, { useEffect } from 'react'

const UseEffect2 = (names) => {

    const message = `Hello, ${names}!`;

    useEffect(() => {
      document.title = `Greetings page ${names}`;
    });

  return (
    <div>
      {message}
    </div>
  )
}

export default UseEffect2

