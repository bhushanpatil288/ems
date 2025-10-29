import { useEffect, useContext } from 'react'
import { AdminDashboard, EmployeeDashboard, Login } from './components/Index'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'

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

  const data = useContext(AuthContext)
  console.log(data);
  

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard/> : ''}
      {user === 'employee' ? <EmployeeDashboard/>: ''}
    </>
  )
}

export default App
