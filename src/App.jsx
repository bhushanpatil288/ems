import { useEffect } from 'react'
import { AdminDashboard, EmployeeDashboard, Login } from './components/Index'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {

  useEffect(() => {
    // setLocalStorage()
    getLocalStorage()
  },
)
  

  return (
    <>
      <Login />
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
