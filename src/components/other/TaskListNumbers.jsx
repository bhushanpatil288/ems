
const TaskListNumbers = ({data}) => {
  return (
    <div className='flex gap-5 justify-between m-10'>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
        <h3 className='text-xl font-medium'>New tasks</h3>
      </div>

      <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
        <h2 className='text-3xl font-semibold !text-black'>{data.taskCount.completed}</h2>
        <h3 className='text-xl font-medium !text-black'>Completed tasks</h3>
      </div>

      <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400'>
        <h2 className='text-3xl font-semibold !text-black'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium !text-black'>Accepted tasks</h3>
      </div>

      <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed tasks</h3>
      </div>
      
    </div>
  )
}

export default TaskListNumbers
