import { createContext, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import { useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

  setLocalStorage();

  const [userData, setUserData] = useState(null)
  
  useEffect(()=>{
    const {employees} = getLocalStorage();
    setUserData(employees)
  },[])


  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
