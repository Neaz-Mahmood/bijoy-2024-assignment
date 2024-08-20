'use client'
import axios from 'axios'
import { use, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Profile = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const getData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      console.log('response', response)
      setData(response.data)

      toast.success('Login success')
    } catch (error: any) {
      console.log('Login failed', error.message)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 text-black font-medium text-xl'>
      Profile
    </div>
  )
}

export default Profile
