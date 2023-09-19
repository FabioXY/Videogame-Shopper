import React from 'react'
import VideogameForm from '../component/VideogameForm'
import VideogameDetails from '../component/VideogameDetails'

function AdminPanel() {
  return (
    <div className='flex flex-row'>
      <h1>Admin Panel</h1>
        <VideogameForm />
        <VideogameDetails />
   </div>
  )
}

export default AdminPanel