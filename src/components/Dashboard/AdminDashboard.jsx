import {Header, CreateTask, AllTask} from '../Index'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
    <Header />

    <CreateTask />

    <AllTask />

    </div>
  )
}

export default AdminDashboard
