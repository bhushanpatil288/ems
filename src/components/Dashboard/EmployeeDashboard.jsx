import { Header, TaskListNumbers, TaskList } from '../Index'

const EmployeeDashboard = ({data, changeUser}) => {
  return (
    <div className='p-10 h-screen w-screen'>
      <Header data= {data} changeUser={changeUser} />
      <TaskListNumbers data= {data} />
      <TaskList data= {data} />
    </div>
  )
}

export default EmployeeDashboard
