import * as yup from 'yup';

export const commentSchema = yup.object({
  comment: yup.string().matches(/^[^\s]/, '첫 문자는 공백이 될 수 없습니다.'),
});
