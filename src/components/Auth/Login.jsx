import { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const submitHandler = (e) =>{
    e.preventDefault();
    
    console.log("fomr sumbited");
  }

  return (
    <div className="flex  h-screen w-screen justify-center items-center">
      <div className="border-2 border-emerald-600 p-20">

          <form 
          onSubmit={(e)=>{submitHandler(e)}}
          className="flex flex-col items-center justify-center rounded"
          >

            <input 
              className="border-2 border-emerald-600 py-3 text-xl px-5 rounded-full outline-none placeholder:text-gray-400" 
              placeholder="Email" 
              type="email" 
              value={email}
              required
              onChange={(e)=>{
                setEmail(e.target.value);
                console.log(e.target.value)
              }}
              />

            <input 
              className="border-2 mt-3 border-emerald-600 py-3 text-xl px-5 rounded-full outline-none placeholder:text-gray-400" 
              placeholder="Enter your password" 
              type="password" 
              value={pass}
              onChange={(e)=>{
                setPass(e.target.value);
                console.log(e.target.value)
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
