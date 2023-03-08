import type { Study } from '@/api/mockTypes';

export const studies: Study[] = [
  {
    studyId: 1,
    studyName: '스터디명',
    title: '스터디 제목',
    startDate: '2023-03-06',
    endDate: '2023-03-30',
    personnel: '모집인원',
    place: '모임장소',
    placeDetails: '장소디테일',
    address: '주소',
    activity: '활동분야',
    period: '모집주기',
    studyStatus: '모집전',
    online: false,
    checkLikes: false,
    stack: [
      {
        stackId: 1,
        stackName: 'javascript',
      },
      {
        stackId: 2,
        stackName: 'python',
      },
    ],
    userId: 1,
    userName: 'kim',
    email: 'kim@gmail.com',
    field: '백엔드',
    userProfileUrl: 'https://spam-image.s3.ap-northeast-2.amazonaws.com/basic.png',
  },
];
