import * as yup from 'yup';

export const registerSchema = yup
  .object({
    userName: yup
      .string()
      .required('이름을 입력해주세요.')
      .matches(/^[가-힣a-zA-Z0-9]{2,16}$/, '특수문자와 공백 없이 2자 이상 입력해주세요.'),
    email: yup.string().email('올바른 이메일 형식이 아닙니다.').required('이메일을 입력해주세요.'),
    authCode: yup.string(),
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
      .nullable()
      .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
    field: yup.string(),
  })
  .required();

export type RegisterSchema = yup.InferType<typeof registerSchema>;
