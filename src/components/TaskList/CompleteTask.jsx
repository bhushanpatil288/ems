import React from 'react'

const CompleteTask = () => {
  return (
    <div className='flex  flex-col flex-shrink-0 h-full justify-between p-5  w-[300px] bg-green-400 rounded-xl'>
      <div>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm !text-black'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-bold !text-black'>Make a youtube video</h2>
        <p className='text-sm mt-2 !text-black'>alsdjf lsajflsadjfajwoie aflaksdjf lsjflj alksjd fasjflkjk. ! sadjfl</p>
      </div>

      <div className='flex justify-between mt-4'>
        <button className='py-1 px-2 text-sm rounded w-full !text-black'>completed ✅</button>
      </div>

    </div>
  )
}

export default CompleteTask
