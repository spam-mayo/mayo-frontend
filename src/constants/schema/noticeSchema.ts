import * as yup from 'yup';

export const noticeSchma = yup.object({
  noticeTitle: yup.string().required('공지사항 제목은 공백일 수 없습니다.'),
  noticeContent: yup.string().required('공지사항 내용은 공백일 수 없습니다.'),
});
