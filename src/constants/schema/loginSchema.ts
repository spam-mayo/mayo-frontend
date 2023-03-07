import * as yup from 'yup';

export const loginSchema = yup
  .object({
    email: yup.string().email('올바른 이메일 형식이 아닙니다.').required('이메일을 입력해주세요.'),
    password: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
        '영문, 특수문자, 숫자 포함한 8자 이상 16자 미만으로 입력해주세요.'
      ),
  })
  .required();

export type LoginSchema = yup.InferType<typeof loginSchema>;
