import * as React from 'react';
import Button from '@mui/material/Button';
import Puma from './assets/puma.svg'
import Cart from './assets/cart.png'
import Shoes from './assets/shoess.jpg'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf'; 

export default function ButtonUsage() {
  return (
    <>
       <div className='bg-purple-400 h-screen grid '>
          <div className='text-5xl font-bold font-sans-serif text-white text-center mt-24 '>Item Card using HTML & CSS</div>
        

        <div className='flex justify-center'>
               <div className=' bg-white h-auto w-[300px] rounded-lg mb-20'>
                    <div className='flex justify-between w-full p-3'>
                      <img src={Puma} className='w-9 h-9'></img>
                      <img src={Cart} className='w-9 h-9'></img>
                    </div>
               
                  <div className=''>
                     <img src={Shoes} className='h-44 w-35 mx-auto'></img>
                  </div>

          <div className=''>
              <div className='font-bold text-2xl mt-1 ml-5'>XRay Jr Dark</div>
                  <p className='text-gray-400 ml-5 pt-2'>Lorem ipsum dolor sit amet consectetur adipsing elit.lusto sit doloremeque 
                      unde  eaque. </p>

                <div className='text-purple-400 ml-4 pt-2'>
                   <StarIcon></StarIcon>
                   <StarIcon></StarIcon>
                   <StarIcon></StarIcon>
                   <StarIcon></StarIcon>
                   <StarHalfIcon></StarHalfIcon>
                </div>

                <div className='flex justify-center mt-2'>
                  <sup className='text-green-600 font-bold text-xl mt-2 mr-1'>$</sup><h1 className='font-semibold text-2xl'>5.00/-</h1>
                </div>


                <div className='bg-purple-400 p-2 mx-3 flex justify-center rounded-full'>
                  <h2>Add To Cart</h2>
                </div>

            </div>
        </div>   
    </div>
</div>
</>
)
}