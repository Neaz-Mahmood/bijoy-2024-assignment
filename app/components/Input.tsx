import { Path, UseFormRegister } from 'react-hook-form'
import { IFormValues } from '../login/page'

type InputProps = {
  label: string
  register: UseFormRegister<any>
  required: boolean
  className?: string
  placeholder?: string
  name: Path<any>
  type?: string
  error?: any
}
export const Input = ({
  label,
  register,
  required,
  className,
  placeholder,
  name,
  error,
  ...rest
}: InputProps) => (
  <>
    <label>{label}</label>
    <input
      {...register(name, { required })}
      className={className}
      type={rest.type}
      placeholder={placeholder}
    />
    {error && (
      <span className='text-red-600 text-xs font-normal'>{error.message}</span>
    )}
  </>
)
