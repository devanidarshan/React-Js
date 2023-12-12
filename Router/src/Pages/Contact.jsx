import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from "../Components/Navbar"

const Contact = () => {
  return (
    <div>
    <Navbar/>
      <h1 className='text-5xl mb-10 '>This is Contact Page</h1>
      <Link className='button' to="C1">C1 Data</Link>
      <Link className='button' to="C2">C2 Data</Link>
      <Link className='button' to="C3">C3 Data</Link>
      <Outlet></Outlet>
    </div>
  )
}

export default Contact
