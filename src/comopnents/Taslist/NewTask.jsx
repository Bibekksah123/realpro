import React from 'react'

function NewTask() {
  return (
    <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
    <div className="flex justify-between items-center">
      <h1 className='bg-red-600 py-1 text-sm px-3 rounded'>High</h1>
      <h3 className='text-sm'>20 feb 2024</h3>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>Make youtube video</h2>
    <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius omnis vel libero repellat ipsum temporibus tenetur quia, quod nesciunt maiores.</p>
    <div className=' mt-4 text-center '>
      <button className='border-none bg-green-600 py-1 px-2 outline-none    rounded-xl cursor-pointer text-sm '>Accept Task</button>
    
    </div>
          </div>
  )
}

export default NewTask