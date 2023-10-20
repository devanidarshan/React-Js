import React from 'react'

const SideEffect = ({name}) => {

    const message = `Hello, ${name}!`; // Calculates output

    document.title = `Greetings to ${name}`; // Side-effect!

  return (

    <div>{message}</div>
  )
}

export default SideEffect
