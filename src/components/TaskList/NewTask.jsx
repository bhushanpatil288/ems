import React from 'react'

const NewTask = ({taskData}) => {
  return (
    <div className='flex  flex-col flex-shrink-0 h-full justify-between p-5  w-[300px] bg-blue-400 rounded-xl'>
      <div>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{taskData.category}</h3>
          <h4 className='text-sm'>{taskData.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-bold'>{taskData.taskTitle}</h2>
        <p className='text-sm mt-2'>{taskData.taskDescription}</p>
      </div>

      <div className='flex justify-between mt-4'>
        <button className='bg-green-700 py-1 px-2 text-sm rounded w-full'>Accept Task</button>
      </div>

    </div>
  )
}

export default NewTask
