'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Input'

export interface ISignUpValues {
  Email: string
  Password: string
  Username: string
}

export default function SignupPage() {
  const router = useRouter()

  const [buttonDisabled, setButtonDisabled] = React.useState(false)

  const { register, handleSubmit } = useForm<ISignUpValues>()

  const onSubmit: SubmitHandler<ISignUpValues> = async (data) => {
    try {
      console.log(data)
      toast.success('Sign up success')
      router.push('/profile')
    } catch (error: any) {
      console.log('Sign up failed', error.message)
      toast.error(error.message)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Sign up</h1>
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
          label='Username'
          className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
          register={register}
          required
          placeholder='user name'
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
          Signup
        </button>
      </form>

      <Link href='/login'>Visit login page</Link>
    </div>
  )
}
