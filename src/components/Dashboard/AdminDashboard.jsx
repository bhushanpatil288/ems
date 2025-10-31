import {Header, CreateTask, AllTask} from '../Index'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-10'>
    <Header changeUser = {props.changeUser} />

    <CreateTask />

    <AllTask />

    </div>
  )
}

export default AdminDashboard
