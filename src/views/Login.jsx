import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../api';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/user/userSlice';

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async(e) => {
      e.preventDefault()
      if (!email || !password) return;
      try {
        const res = await login(email,password)
        const [fName,lName] = res.data?.name?.split(' ') || ['','']
        dispatch(loginUser(fName,lName,res.data?.email,res.data?.token))
        setEmail('')
        setPassword('')
        navigate("/dashboard")
      } catch (err) {
        console.log(err)
      }
    }
    return (
      <div className="min-h-screen bg-cyan-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-cyan-700 mb-6 text-center">Login to Your Account</h2>
  
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-cyan-700">Email address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-cyan-700">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              />
            </div>
  
            <button
              type="submit"
              onClick={(e)=>handleSubmit(e)}
              disabled={!password && !email}
              className="w-full py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition duration-200"
            >
              Login
            </button>
  
            <p className="text-center text-sm text-gray-600 mt-4">
              Don't have an account?{" "}
              <Link to="/register" className="text-cyan-700 font-medium hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  
}

export default Login;