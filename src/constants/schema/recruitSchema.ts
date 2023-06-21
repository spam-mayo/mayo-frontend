import * as yup from 'yup';

export const recruitSchema = yup.object({
  offerIntro: yup
    .string()
    .required('스터디 소개칸은 공백일 수 없습니다.')
    .matches(/^\S/, '첫 문자는 공백일 수 없습니다.'),
  offerRule: yup
    .string()
    .required('스터디 규칙칸은 공백일 수 없습니다.')
    .matches(/^\S/, '첫 문자는 공백일 수 없습니다.'),
});
