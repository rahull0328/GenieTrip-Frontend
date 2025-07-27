import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';

const Login = ({setCurrentPage}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleLogin = async(e) => {
    e.preventDefault()
  }
  return (
    <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>
      <h3 className='text-lg font-semibold text-black'>Welcome Back</h3>
      <p className='text-xs text-slate-700 mt-[5px] mb-6'>Please enter your details to log in</p>

      <form onSubmit={handleLogin}>
        <Input 
          value={email}
          onChange={({ target}) => setEmail(target.value)}
          label="Email Address"
          placeholder="john@example.com"
          type="text"
        />

        <Input 
          value={password}
          onChange={({target}) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 Characters"
          type='password'
        />
      </form>
    </div>
  )
}

export default Login