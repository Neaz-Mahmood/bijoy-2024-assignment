import { Path, UseFormRegister } from 'react-hook-form'
import { IFormValues } from '../login/page'

type InputProps = {
  label: Path<any>
  register: UseFormRegister<any>
  required: boolean
  className?: string
  placeholder?: string
  type?: string
}
export const Input = ({
  label,
  register,
  required,
  className,
  placeholder,
  ...rest
}: InputProps) => (
  <>
    <label>{label}</label>
    <input
      {...register(label, { required })}
      className={className}
      placeholder={placeholder}
    />
  </>
)
