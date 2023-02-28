import type { FC } from 'react';
import { AuthInput } from './authInput';
import { useForm, SubmitHandler } from 'react-hook-form';

export type FormValues = {
  name: string;
  email: string;
  password: string;
  password_check: string;
};

export const RegisterForm: FC = () => {
  const { handleSubmit, control } = useForm<FormValues>({});

  const onSubmit: SubmitHandler<FormValues> = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthInput control={control} name="name" label="이름" type="text" placeholder="이름을 입력하세요." />

      {/* <Controller
        control={control}
        rules={{ required: true }}
        name="email"
        defaultValue={''}
        render={() => <AuthInput label="이메일" type="email" placeholder="이메일을 입력하세요." />}
      />
      <Controller
        control={control}
        rules={{ required: true }}
        name="password"
        defaultValue={''}
        render={() => <AuthInput label="비밀번호" type="password" placeholder="비밀번호를 입력하세요." />}
      />
      <Controller
        control={control}
        rules={{ required: true }}
        name="password_check"
        defaultValue={''}
        render={() => <AuthInput label="비밀번호 확인" type="password" placeholder="비밃번호를 확인하세요." />}
      /> */}

      <button type="submit">회원가입</button>
    </form>
  );
};
