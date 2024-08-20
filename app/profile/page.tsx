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
    <div className='flex flex-col items-center justify-center min-h-screen w-screen py-2 text-black font-medium text-xl'>
      <div className='w-full px-10'>
        <div className='flex  px-5 text-lg font-semibold'>
          <div className='w-[10%] text-start pl-1 border-solid border-2 border-black'>
            id
          </div>
          <div className='w-[15%]  pl-1 border-solid border-2 border-black'>
            Name
          </div>
          <div className='w-[30%]  pl-1 border-solid border-2 border-black'>
            Phone
          </div>
          <div className='w-[30%]  pl-1 border-solid border-2 border-black'>
            Email
          </div>
          <div className='w-[15%]  pl-1 border-solid border-2 border-black'>
            City
          </div>
        </div>
        {data?.map((item: any, index: number) => (
          <div key={index} className='flex px-5 '>
            <div className='w-[10%] text-start pl-1 border-solid border-2 border-black'>
              {item?.id}
            </div>
            <div className='w-[15%] text-start pl-1 border-solid border-2 border-black'>
              {item?.name}
            </div>
            <div className='w-[30%] text-start pl-1 border-solid border-2 border-black'>
              {item?.phone}
            </div>
            <div className='w-[30%] text-start pl-1 border-solid border-2 border-black'>
              {item?.email}
            </div>
            <div className='w-[15%] text-start pl-1 border-solid border-2 border-black'>
              {item?.address?.city}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile
