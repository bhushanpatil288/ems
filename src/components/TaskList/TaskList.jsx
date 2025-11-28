import React from 'react'
import {AcceptTask, CompleteTask, FailedTask, NewTask} from '../Index'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] md:overflow-x-auto flex items-center justify-center md:justify-start gap-5 flex-wrap md:flex-nowrap w-full py-5'>
      {data.tasks.map((e, idx)=>{
        if(e.newTask){
          return <NewTask key={idx} taskData = {e} />
        }
        if (e.active){
          return <AcceptTask key={idx} taskData = {e} />
        }
        if (e.completed){
          return <CompleteTask key={idx} taskData = {e} />
        }
        if (e.failed){
          return <FailedTask key={idx} taskData = {e} />
        }
      })}
      {/* <AcceptTask />
      <NewTask />
      <CompleteTask />
      <FailedTask /> */}
    </div>
    
  )
}

export default TaskList
