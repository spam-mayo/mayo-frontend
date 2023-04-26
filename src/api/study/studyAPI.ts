import axiosInstance from '@/api/axiosInstance';
import type {
  GetMyStudyRes,
  GetStudyDetailRes,
  GetStudyUserRes,
  PaginationRes,
  PutStudyUser,
} from '@/api/study/studyTypes';

export const getMypageStudy = (page: number, params?: { status?: string; tab?: string; approvalStatus?: string }) => {
  return axiosInstance.get<PaginationRes<GetMyStudyRes>>('/api/study/my-page?size=8', { params: { page, ...params } });
};

export const getStudyDetail = (studyId: number) => axiosInstance.get<GetStudyDetailRes>(`/api/study/${studyId}`);

export const getStudyUser = (studyId: string, params: { page: number; status?: string }) =>
  axiosInstance.get<PaginationRes<GetStudyUserRes>>(`/api/study/${studyId}/users`, { params: { size: 5, ...params } });

export const putStudyApproval = ({ studyId, userId }: PutStudyUser) =>
  axiosInstance.put(`/api/study/${studyId}/users/${userId}/approval`);

export const putStudyReject = ({ studyId, userId }: PutStudyUser) =>
  axiosInstance.put(`/api/study/${studyId}/users/${userId}/reject`);
