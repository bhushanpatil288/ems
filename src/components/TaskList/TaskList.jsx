import React from 'react'
import {AcceptTask, CompleteTask, FailedTask, NewTask} from '../Index'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5'>
      {data.tasks.map((e, idx)=>{
        if(e.newTask){
          return <NewTask key={idx} />
        }
        if (e.active){
          return <AcceptTask key={idx} />
        }
        if (e.completed){
          return <CompleteTask key={idx} />
        }
        if (e.failed){
          return <FailedTask key={idx} />
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
