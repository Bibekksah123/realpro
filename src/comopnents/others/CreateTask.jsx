import React from 'react'

function CreateTask() {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
    <form className="flex flex-wrap w-full items-start justify-between">
      <div className="w-1/2">
        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
          <input
            className="text-black text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="text"
            placeholder="Make a UI design"
          />
        </div>
        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
          <input type="date" className=" text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" />
        </div>
        <div>
          <h3 className="text-xl font-medium'">Assign to</h3>
          <input type="text" placeholder="Emp-Name "  className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"/>
        </div>
        <div>
          <h3 className="text-sm text-gray-300 mb-0.5'">Category</h3>
          <input type="text" placeholder="design , devops,mern,menn"  className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"/>
        </div>
      </div>

      <div className="w-1/2">
        <h3 className="text-sm text-gray-300 mb-0.">Description</h3>
        <textarea name="" id="" className="text-black w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"></textarea>
      </div>
      <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
    </form>
  </div>
  )
}

export default CreateTask