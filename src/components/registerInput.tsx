import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface InputValues {
  type: string;
  label: string;
  placeholder: string;
  id: string;
}

export const AuthInput: FC<InputValues> = ({ id, label, type, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...register(id, { required: 'true' })} />
      {errors?.[id]?.message && <p>{errors?.[id].message}</p>}
    </div>
  );
};
