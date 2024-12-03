import React from 'react'

function Tasklistnumbers({data}) {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className="px-9 py-6 rounded-xl w-[40%] bg-red-400">
        <h1 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h1>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className="px-9 py-6 rounded-xl w-[40%] bg-blue-400">
          
          <h1 className='text-3xl font-semibold'>{data.taskCounts.completed}</h1>
        <h3 className='text-xl font-medium'>Complete Task</h3>
      </div>
      <div className="px-9 py-6 rounded-xl w-[40%] bg-green-400">
        <h1 className='text-3xl font-semibold'>{data.taskCounts.active}</h1>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className="px-9 py-6 rounded-xl w-[40%] bg-yellow-400">
        <h1 className='text-3xl font-semibold'>{data.taskCounts.failed}</h1>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default Tasklistnumbers