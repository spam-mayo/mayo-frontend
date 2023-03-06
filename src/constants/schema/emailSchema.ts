import * as yup from 'yup';

export const emailSchema = yup
  .object({
    email: yup.string().email('올바른 이베일 형식이 아닙니다.').required('이메일을 입력해주세요.'),
  })
  .required();

export type EmailSchema = yup.InferType<typeof emailSchema>;
