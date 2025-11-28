import { useState } from "react";

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const submitHandler = (e) =>{
    e.preventDefault();

    handleLogin(email, pass);

    setEmail('');
    setPass('');
  }

  return (
    <div className="flex justify-center items-center mt-50">
      <div className="border-2 border-blue-600 p-20 rounded-xl bg-gradient-to-tr from-blue-400 to-blue-800 shadow-2xl">

          <form 
          onSubmit={(e)=>{submitHandler(e)}}
          className="flex flex-col items-center justify-center rounded"
          >

            <input 
              type="email" 
              placeholder="Email" 
              className="border-2 border-blue-600 py-3 text-xl px-5 rounded-full outline-none placeholder:text-gray-400 bg-white" 
              required
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
              />

            <input 
              type="password" 
              placeholder="Enter your password" 
              className="border-2 mt-3 border-blue-600 py-3 text-xl px-5 rounded-full outline-none placeholder:text-gray-400 bg-white" 
              value={pass}
              onChange={(e)=>{
                setPass(e.target.value);
              }}
              required
              />

            <button 
              className="border-blue-600 mt-5 bg-blue-600 rounded-full py-1 px-5 bg-gradient-to-t from-blue-200 to-blue-500 cursor-pointer hover:scale-105 active:scale-95 transition">
              Login
            </button>

          </form>
      </div>
      
    </div>
  )
}

export default Login
