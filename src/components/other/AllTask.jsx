import {useContext} from 'react'
import {AuthContext} from '../../context/AuthProvider';

const AllTask = ({data}) => {

  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className='p-5 mt-5'>
    
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg w-1/5'>Employee Name</h2>
        <h5 className='text-lg w-1/5'>Active Tasks</h5>
        <h3 className='text-lg w-1/5'>New Tasks</h3>
        <h5 className='text-lg w-1/5'>Completed</h5>
        <h5 className='text-lg w-1/5'>Failed</h5>
      </div>

      <div className='overflow-auto'>
        {userData.map((e, idx)=>{
        return <div key={idx} className='border border-emerald-600 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-xl w-1/5'>{e.firstName}</h2>
                <h5 className='text-xl font-bold w-1/5 !text-yellow-300'>{e.taskCount.active}</h5>
                <h3 className='text-xl font-bold w-1/5 !text-blue-400'>{e.taskCount.newTask}</h3>
                <h5 className='text-xl font-bold w-1/5'>{e.taskCount.completed}</h5>
                <h5 className='text-xl font-bold w-1/5 !text-red-400'>{e.taskCount.failed}</h5>
              </div>
        })}
      </div>
    </div>
  )
}

export default AllTask
