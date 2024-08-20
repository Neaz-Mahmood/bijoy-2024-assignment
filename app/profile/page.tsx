'use client'
import { useState } from 'react'
import toast from 'react-hot-toast'

const Profile = () => {
  const [loading, setLoading] = useState(false)
  const getData = async () => {
    try {
      setLoading(true)
      // const response = await axios.post('/api/users/login', user)

      toast.success('Login success')
     
    } catch (error: any) {
      console.log('Login failed', error.message)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 text-black font-medium text-xl'>
      Profile
    </div>
  )
}

export default Profile
