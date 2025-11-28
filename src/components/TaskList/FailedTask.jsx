import React from 'react'

const FailedTask = ({taskData}) => {
  return (
    <div className='flex  flex-col flex-shrink-0 h-full justify-between p-5  w-[300px] bg-red-400 rounded-xl'>
      <div>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded !text-white'>{taskData.category}</h3>
          <h4 className='text-sm'>{taskData.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-bold'>{taskData.taskTitle}</h2>
        <p className='text-sm mt-2'>{taskData.taskDescription}</p>
      </div>

      <div className='flex justify-between mt-4'>
        <button className='py-1 px-2 text-sm rounded w-full !text-white'>Failed ❌</button>
      </div>

    </div>
  )
}

export default FailedTask
