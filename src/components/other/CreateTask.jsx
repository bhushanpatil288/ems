const CreateTask = () => {
  return (
    <div>
      <form className='flex flex-wrap w-full items-center justify-between p-5 bg-[#1c1c1c] mt-5'>
        <div className='w-1/2 flex flex-col gap-3'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input className='border-[1px] w-75 px-2 py-1 rounded outline-none' type='text' placeholder='Make a UI Design' />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input className='border-[1px] w-75 px-2 py-1 rounded outline-none' type='date' />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input className='border-[1px] w-75 px-2 py-1 rounded outline-none' type='text' placeholder='Employee Name' />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input className='border-[1px] w-75 px-2 py-1 rounded outline-none' type='text' placeholder='Design, dev, etc' />
          </div>
        </div>
        
        <div className='w-1/2'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea className='border-[1px] w-full px-3 py-2' rows={7}></textarea>
          <button className='w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-sm mt-4'>Create Task</button>
        </div>
       
      </form>
    </div>
  )
}

export default CreateTask
