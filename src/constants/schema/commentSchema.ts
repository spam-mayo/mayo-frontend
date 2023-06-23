import * as yup from 'yup';

export const commentSchema = yup.object({
  comment: yup.string().matches(/^\S/, '첫 문자는 공백일 수 없습니다.'),
});
