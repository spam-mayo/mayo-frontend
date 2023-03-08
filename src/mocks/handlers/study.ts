import type { PatchStudyPayload, PostStudyPayload, Study } from '@/api/mockTypes';
import { studies } from '@/mocks/data/study';
import { rest } from 'msw';

export const studyHandlers = [
  rest.get('/study', (req, res, ctx) => {
    const data = studies.map(
      ({
        studyId,
        title,
        stack,
        startDate,
        endDate,
        studyStatus,
        online,
        checkLikes,
        userId,
        userName,
        userProfileUrl,
      }) => ({
        studyId,
        title,
        stack,
        startDate,
        endDate,
        studyStatus,
        online,
        checkLikes,
        userId,
        userName,
        userProfileUrl,
      })
    );
    return res(
      ctx.json({
        data,
        pageInfo: {
          page: 1,
          size: 10,
          totalElements: data.length,
          totalPage: 1,
        },
      })
    );
  }),

  rest.get('/study/:studyId', (req, res, ctx) => {
    const { studyId } = req.params;
    const id = studyId.length ? studyId[0] : studyId;

    const study: Study | undefined = studies.find((study) => study.studyId === Number(id));

    if (!study) {
      return res(ctx.status(404, '존재하지 않는 스터디입니다.'));
    }
    return res(ctx.json(study));
  }),

  rest.post('/study', (req, res, ctx) => {
    req.json<PostStudyPayload>().then((payload) => {
      const newData: Study = {
        ...payload,
        email: 'spam@mayo.com',
        field: 'field',
        studyId: studies.length + 1,
        userId: 1,
        userName: 'kim',
        userProfileUrl: 'https://spam-image.s3.ap-northeast-2.amazonaws.com/basic.png',
        studyStatus: '모집전',
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
        checkLikes: false,
      };
      studies.push(newData);
      return res(ctx.json({ studyId: newData.studyId }));
    });
  }),

  rest.delete('/study/:studyId', (req, res, ctx) => {
    const { studyId } = req.params;
    const id = studyId.length ? studyId[0] : studyId;

    const idx = studies.findIndex((study) => study.studyId === Number(id));

    if (idx !== -1) {
      studies.splice(idx, 1);
      return res(ctx.status(200));
    } else {
      return res(ctx.status(404));
    }
  }),

  rest.patch('/study/:studyId', (req, res, ctx) => {
    const { studyId } = req.params;
    const id = studyId.length ? studyId[0] : studyId;

    req.json<PatchStudyPayload>().then((payload) => {
      const idx = studies.findIndex((study) => study.studyId === Number(id));

      if (idx !== -1) {
        const prev = studies[idx];
        studies.splice(idx, 1).push({
          ...prev,
          ...payload,
        });
        return res(ctx.json({ studyId: prev.studyId }));
      } else {
        return res(ctx.status(404));
      }
    });
  }),
];
