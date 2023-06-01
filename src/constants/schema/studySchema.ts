import * as yup from 'yup';

export const studySchema = yup.object({
  studyName: yup.string().required('스터디명을 입력해주세요'),
  title: yup.string().required('스터디 제목을 입력해주세요'),
  place: yup.string().required('장소를 선택해주세요.'),
});
