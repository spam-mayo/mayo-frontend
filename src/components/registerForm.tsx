import type { FC } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { AuthInput } from './registerInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormValues {
  name: string;
  email: string;
  password: string;
  password_check: string;
}

const schema = yup
  .object({
    name: yup
      .string()
      .required('이름을 입력해주세요.')
      .matches(/^[가-힣a-zA-Z0-9]{2,16}$/, '특수문자와 공백 없이 2자 이상 입력해주세요.'),
    email: yup
      .string()
      .required('이메일을 입력해주세요.')
      .matches(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, '이메일 형식에 맞지 않습니다.'),
    password: yup
      .string()
      .required('비밀번호를 입력해주세요')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
        '영문, 특수문자, 숫자 포함한 8자 이상 16자 미만으로 입력해주세요.'
      ),
    password_check: yup
      .string()
      .required('비밀번호를 확인해주세요.')
      .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
  })
  .required();

export const RegisterFrom: FC = () => {
  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password_check: '',
    },
  });

  const onSubmit = (data: FormValues) => alert(JSON.stringify(data));

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <AuthInput type="text" label="이름" placeholder="이름을 입력해주세요." id="name" />
        <AuthInput type="emil" label="이메일" placeholder="이메일을 입력해주세요." id="email" />
        <AuthInput type="password" label="비밃번호" placeholder="비밃번호를 입력해주세요." id="password" />
        <AuthInput
          type="password"
          label="비밀번호 확인"
          placeholder="비밃번호를 다시 입력해주세요."
          id="password_check"
        />

        <button type="submit">회원가입</button>
      </form>
    </FormProvider>
  );
};
