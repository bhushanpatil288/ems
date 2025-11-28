import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('')
  const [assignedTo, setAssignedTo] = useState('');
  const [category, setCategory] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) =>{
    e.preventDefault();

    setNewTask({taskTitle, taskDescription, taskDate, category, active:false, newTask:true, failed:false, completed:false})
    
    const employeeData = userData;
    employeeData.forEach(function(e){
      if (assignedTo === e.firstName.toLowerCase()){
        e.tasks.push(newTask);
        e.taskCount.newTask = e.taskCount.newTask + 1;
      }
    })

    // setUserData(employeeData);
    setUserData(employeeData)
    console.log(employeeData);
    
    setTaskTitle('')
    setTaskDate('')
    setAssignedTo('')
    setCategory('')
    setTaskDescription('')
  }
  
  return (
    <div>
      <form onSubmit={(e)=>{
          submitHandler(e);
        }} 
        className='flex flex-wrap w-full items-center justify-between p-5 mt-5'
      >
        <div className='w-1/2 flex flex-col gap-3'>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input 
              className='border-[1px] w-75 px-2 py-1 rounded outline-none' 
              type='text' 
              placeholder='Make a UI Design' 
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value);
              }}
              />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input 
              className='border-[1px] w-75 px-2 py-1 rounded outline-none' 
              type='date' 
              value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input 
              className='border-[1px] w-75 px-2 py-1 rounded outline-none' 
              type='text' 
              placeholder='Employee Name'
              value={assignedTo}
              onChange={(e)=>{
                setAssignedTo(e.target.value);
              }}
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input 
              className='border-[1px] w-75 px-2 py-1 rounded outline-none' 
              type='text' 
              placeholder='Design, dev, etc' 
              value={category}
              onChange={(e)=>{
                  setCategory(e.target.value);
                }}
            />
          </div>

        </div>
        
        <div className='w-1/2'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea 
            className='border-[1px] w-full px-3 py-2' 
            rows={7}
            value={taskDescription}
            onChange={(e)=>{
                  setTaskDescription(e.target.value);
                }}
          >
          </textarea>
          <button className='w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-sm mt-4 cursor-pointer'>Create Task</button>
        </div>
       
      </form>
    </div>
  )
}

export default CreateTask
