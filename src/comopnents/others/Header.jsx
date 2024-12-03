import React from 'react'

function Header({setUser,data}) {
  console.log(data)
  return (
      <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello<br/><span className='text-3xl font-semibold'>{data?`${data.firstName}`:'' }👋</span></h1>
        <button onClick={()=>setUser('')} className='bg-red-600 text-white px-4 py-3 rounded-full text-xl'>Log out</button>
      </div>
    
  )
}

export default Header