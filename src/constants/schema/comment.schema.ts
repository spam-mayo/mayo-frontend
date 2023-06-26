import * as yup from 'yup';

export const commentSchema = yup.object({
  comment: yup.string().matches(/^\S+$/, '공백 또는 빈 문자열은 입력할 수 없습니다.'),
});
