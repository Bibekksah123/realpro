import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function Tasklist({data}) {
  console.log(data)
  return (
    <div id='taskover' className='h-[55%] overflow-x-auto flex justify-start items-center gap-5 w-full mt-10 py-5 '>
  {data.tasks.map((item)=>{
    if(item.active){
      return <AcceptTask/>
    }
    if(item.completed){
      return <CompleteTask/>
    }
    if(item.failed){
      return <FailedTask/>

    }
    if(item.newTask){
      return<NewTask/>
    }
})}
     
     
    </div>
  )
}

export default Tasklist