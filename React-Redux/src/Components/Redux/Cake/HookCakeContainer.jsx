import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import buyCake from './Action'

const HooksCakeContainer = () => {

const numOfCakes =   useSelector(state => state.numOfCakes)
const dispatch = useDispatch()

  return (
    <div>
      <h1 className='text-4xl font-semibold'>Num Of Cakes - {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer