'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Input'

export interface IFormValues {
  Email: string
  Password: string
}

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)

  const { register, handleSubmit } = useForm<IFormValues>()
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data)
    toast.success('Login success')
    router.push('/profile')
  }
  const onLogin = async () => {
    try {
      setLoading(true)
      // const response = await axios.post('/api/users/login', user)

      toast.success('Login success')
      router.push('/profile')
    } catch (error: any) {
      console.log('Login failed', error.message)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Login</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
        <Input
          label='Email'
          className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
          register={register}
          required
          placeholder='email'
        />
        <Input
          label='Password'
          className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
          register={register}
          required
          type='password'
          placeholder='password'
        />
        <button
          type='submit'
          className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
        >
          Login here
        </button>
      </form>
      <Link href='/signup'>Visit Signup page</Link>
    </div>
  )
}
