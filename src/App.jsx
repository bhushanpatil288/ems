import { useEffect } from 'react'
import { AdminDashboard, EmployeeDashboard, Login } from './components/Index'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { useState } from 'react'

const App = () => {
  
  const [user, setUser] = useState(null);

  const handleLogin=(email, password)=>{
    if (email === 'admin@me.com' && password === '123'){
      setUser('admin');
    } else if (email === 'emp@me.com' && password === '123'){
      setUser('employee');
    } else {
      console.log("Invalid Credentials");
    }
  }
  

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard/> : ''}
      {user === 'employee' ? <EmployeeDashboard/>: ''}
    </>
  )
}

export default App
