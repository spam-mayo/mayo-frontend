import type { FC } from 'react';
import { Controller, Control } from 'react-hook-form';

export interface InputTypes {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  control: Control;
}

export const AuthInput: FC<InputTypes> = (props) => {
  const { label, type, placeholder, name, control } = props;

  <Controller
    control={control}
    name={name}
    rules={{ required: true }}
    render={({ field }) => (
      <div>
        <label>{label}</label>
        <input value={field.value} type={type} placeholder={placeholder} />
      </div>
    )}
  />;
};
