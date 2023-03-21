import * as yup from 'yup';

export const nameSchema = yup
  .object({
    userName: yup
      .string()
      .required('이름을 입력해주세요.')
      .matches(/^[가-힣a-zA-Z0-9]{2,16}$/, '특수문자와 공백 없이 2자 이상 입력해주세요.'),
  })
  .required();

export type NameSchema = yup.InferType<typeof nameSchema>;
