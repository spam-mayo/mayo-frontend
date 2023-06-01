import * as yup from 'yup';

export const studySchema = yup.object({
  studyName: yup.string().required('스터디명을 입력해주세요.').matches(/^\S/, '첫 문자는 공백일 수 없습니다.'),
  title: yup.string().required('스터디 제목을 입력해주세요.').matches(/^\S/, '첫 문자는 공백일 수 없습니다.'),
  place: yup.string().required('장소를 선택해주세요.'),
  startDate: yup.string().required('시작 날짜를 선택해주세요.'),
  endDate: yup.string().required('종료 날짜를 선택해주세요.'),
});
