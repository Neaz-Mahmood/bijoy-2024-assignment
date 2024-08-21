'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import {
  SubmitHandler,
  useForm,
  UseFormRegister,
  FieldError,
} from 'react-hook-form'
import { Input } from '../components/Input'
import { z, ZodType } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export interface ISignUpValues {
  full_name: string
  email: string
  zip_code: number
  password: string
  confirm_password: string
}

export type FormFieldProps = {
  type: string
  placeholder: string
  name: ValidFieldNames
  register: UseFormRegister<FormData>
  error: FieldError | undefined
  valueAsNumber?: boolean
}

export type ValidFieldNames =
  | 'email'
  | 'githubUrl'
  | 'yearsOfExperience'
  | 'password'
  | 'confirmPassword'

const schema: ZodType<ISignUpValues> = z
  .object({
    full_name: z.string().min(1, { message: 'full name is required' }),
    email: z.string().email(),
    zip_code: z
      .number({
        required_error: 'zip code is required',
        invalid_type_error: 'zip code must be a number',
      })
      .min(5, { message: 'zip code must be at least 5 digits' })
      .max(8, { message: 'zip code must be at most 8 digits' }),
    password: z
      .string()
      .min(8, { message: 'password must be at least 8 characters' })
      .max(20, { message: 'password must be at most 20 characters' }),
    confirm_password: z.string().min(8).max(20),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'passwords must match',
    path: ['confirm_password'],
  })

export default function SignupPage() {
  const router = useRouter()

  const [buttonDisabled, setButtonDisabled] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ISignUpValues>({
    resolver: zodResolver(schema),
  })

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
          label='Full Name'
          className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
          register={register}
          required
          name='full_name'
          error={errors.full_name}
          placeholder='Full Name'
        />
        <Input
          label='Email'
          className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
          register={register}
          required
          name='email'
          error={errors.email}
          placeholder='email'
        />
        <Input
          label='Zip Code'
          className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
          register={register}
          required
          type='number'
          name='zip_code'
          placeholder='Zip Code'
          error={errors.zip_code}
        />
        <Input
          label='Password'
          className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
          register={register}
          required
          name='password'
          type='password'
          placeholder='Password'
          error={errors.password}
        />
        <Input
          label='Confirm Password'
          className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
          register={register}
          required
          name='confirm_password'
          type='password'
          placeholder='Password'
          error={errors.confirm_password}
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
