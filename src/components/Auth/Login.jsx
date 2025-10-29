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
    <div className="flex  h-screen w-screen justify-center items-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">

          <form 
          onSubmit={(e)=>{submitHandler(e)}}
          className="flex flex-col items-center justify-center rounded"
          >

            <input 
              type="email" 
              placeholder="Email" 
              className="border-2 border-emerald-600 py-3 text-xl px-5 rounded-full outline-none placeholder:text-gray-400" 
              required
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
              />

            <input 
              type="password" 
              placeholder="Enter your password" 
              className="border-2 mt-3 border-emerald-600 py-3 text-xl px-5 rounded-full outline-none placeholder:text-gray-400" 
              value={pass}
              onChange={(e)=>{
                setPass(e.target.value);
              }}
              required
              />

            <button 
              className="border-emerald-600 mt-5 bg-emerald-600 rounded-full py-1 px-5">
              Login
            </button>

          </form>
      </div>
      
    </div>
  )
}

export default Login
