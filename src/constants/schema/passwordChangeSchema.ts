import * as yup from 'yup';

export const passwordChangeSchema = yup
  .object({
    firstPassword: yup
      .string()
      .required('변경할 비밀번호를 입력해주세요.')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
        '영문, 특수문자, 숫자 포함한 8자 이상 16자 미만으로 입력해주세요.'
      ),
    secondPassword: yup
      .string()
      .required('비밀번호를 확인해주세요.')
      .oneOf([yup.ref('firstPassword'), null], '비밀번호가 일치하지 않습니다.'),
  })
  .required();

export type PasswordChangeSchema = yup.InferType<typeof passwordChangeSchema>;
