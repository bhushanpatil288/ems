import {Header, CreateTask, AllTask} from '../Index'

const AdminDashboard = ({data}) => {
  return (
    <div className='h-screen w-full p-10'>
    <Header data = {data} />

    <CreateTask data = {data}/>

    <AllTask data = {data}/>

    </div>
  )
}

export default AdminDashboard
