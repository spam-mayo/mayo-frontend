import axiosInstance from '@/api/axiosInstance';
import type { GetMyStudyReq, GetMyStudyRes, PaginationRes } from '@/api/study/studyTypes';

// export const getMypageStudy = ({ page, studyStatus, tab }: GetMyStudyReq) =>
//   axiosInstance.get<PaginationRes<GetMyStudyRes>>(
//     `/api/study/my-page?tab=${tab}&status=${studyStatus}&page=${page}&size=12`
//   );

export const getMypageStudy = ({ page, studyStatus, tab }: GetMyStudyReq) => {
  let queryParam = `?tab=${tab}&page=${page}&size=12`;
  if (studyStatus) {
    queryParam += `&status=${studyStatus}`;
  }
  return axiosInstance.get<PaginationRes<GetMyStudyRes>>(`/api/study/my-page${queryParam}`);
};
