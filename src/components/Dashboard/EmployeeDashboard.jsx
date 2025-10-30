import { Header, TaskListNumbers, TaskList } from '../Index'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen w-screen'>
      <Header data= {data} />
      <TaskListNumbers data= {data} />
      <TaskList data= {data} />
    </div>
  )
}

export default EmployeeDashboard
