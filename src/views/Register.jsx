import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { registerUser } from '../api';
import Alert from '../utils/Alert';
import { useDispatch } from 'react-redux';
import { register } from '../store/user/userSlice';
const Register = () => {
  const defaultUser = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  }
  const [user,setUser] = useState(defaultUser)
  const [validationError,setValidationError] = useState(null)
  const [error,setError] = useState(null)
  const dispatch = useDispatch()
  const handleSubmit = async(e) => {
    e.preventDefault()
    if (user.password!==user.passwordConfirm) {
      setValidationError({
        type: 'Password',
        message: 'Password does not match!'
      })
      return
    }
    try {
      const res = await registerUser(user)
      console.log(res)
      const [fName,lName] = res.data?.user?.name?.split(' ') || ['','']
      const email = res.data?.user?.email || ''
      console.log(fName,lName,email)
      dispatch(register(fName,lName,email,res.token))
      setError(null)
      setUser(defaultUser)
      setValidationError(null)
    } catch (err) {
      setError(err)
    }
    
  }
  return (
    <div className="min-h-screen bg-cyan-50 flex items-center justify-center px-4">
      {error && <Alert type="error" message={error.message} onClose={() => setError("")} />}
      {/* {success && <Alert type="success" message={success} onClose={() => setSuccess("")} />} */}
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-cyan-700 mb-6 text-center">Create an Account</h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-cyan-700">First Name</label>
            <input
              type="text"
              required
              value={user.firstName}
              onChange={(e)=>setUser(prevState=>({...prevState,firstName: e.target.value}))}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-cyan-700">Last Name</label>
            <input
              type="text"
              required
              value={user.lastName}
              onChange={(e)=>setUser(prevState=>({...prevState,lastName: e.target.value}))}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-cyan-700">Email address</label>
            <input
              type="email"
              required
              value={user.email}
              onChange={(e)=>setUser(prevState=>({...prevState,email: e.target.value}))}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-cyan-700">Password</label>
            <input
              type="password"
              required
              value={user.password}
              onChange={(e)=>setUser(prevState=>({...prevState,password: e.target.value}))}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-cyan-700">Confirm Password</label>
            <input
              type="password"
              required
              value={user.passwordConfirm}
              onChange={(e)=>setUser(prevState=>({...prevState,passwordConfirm: e.target.value}))}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none"
            />
            {validationError && <p className='text-red-600 px-4 py-2'>{validationError.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition duration-200"
            onClick={handleSubmit}
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-700 font-medium hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;