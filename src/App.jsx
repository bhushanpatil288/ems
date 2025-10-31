import { useEffect, useContext } from 'react'
import { AdminDashboard, EmployeeDashboard, Login } from './components/Index'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext)

  useEffect(function(){
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if (loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  }, [])

  const handleLogin=(email, password)=>{
    if (email === 'admin@example.com' && password === '123'){
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
    } else if (userData){
      const employee =  userData.find((e)=>email == e.email && password == e.password);
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
      }
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data:employee}))
    } else {
      console.log("Invalid Credentials");
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard changeUser={setUser} /> : ''}
      {user === 'employee' ? <EmployeeDashboard data = {loggedInUserData} changeUser={setUser}  />: ''}
      {/* {console.log(user, loggedInUserData)} */}
    </>
  )
}

export default App
