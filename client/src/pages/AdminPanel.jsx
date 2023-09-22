import React from 'react'
import VideogameForm from '../component/VideogameForm'
import VideogameDetails from '../component/VideogameDetails'
import Login from '../component/Login'

function AdminPanel() {
  return (
    <div className="flex-row bg-purple-300">
      <h1 className=' font-bold text-4xl flex justify-center pt-5 bg-gradient-to-r from-purple-700 to-pink-600 pb-5'>Admin Panel</h1>
        <Login />
        <VideogameForm />
        <VideogameDetails />
   </div>
  )
}

export default AdminPanel