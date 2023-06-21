import type { UserStudyRoute } from '@/components/mypage/sutdyBlock/StudyIntro';

const myPageLinkTo = (studyRoute?: UserStudyRoute, studyId?: number) => {
  switch (studyRoute) {
    case 'detail':
      return `/study/${studyId}`;
    case 'recruit':
      return `/recruit/detail/${studyId}`;
    case 'createRecruit':
      return `/recruit/create/${studyId}`;
    default:
      return '';
  }
};

export default myPageLinkTo;
