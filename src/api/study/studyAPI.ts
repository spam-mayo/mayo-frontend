import axiosInstance from '@/api/axiosInstance';
import type {
  GetMyStudyRes,
  GetStudyDetailRes,
  GetStudyUserRes,
  PaginationRes,
  PutStudyUser,
  GetStudyTaskCommentRes,
  GetStudyTaskRes,
  PostStudyTaskReq,
  PatchStudyTaskReq,
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

export const putStudyExpulsion = ({ studyId, userId }: PutStudyUser) =>
  axiosInstance.put(`/api/study/${studyId}/users/${userId}/expulsion`);

export const putStudyDelegation = ({ studyId, userId }: PutStudyUser) =>
  axiosInstance.put(`/api/study/${studyId}/users/${userId}/delegation`);

export const getStudyTask = (studyId: number, taskDate: string) =>
  axiosInstance.get<GetStudyTaskRes>(`/api/tasks/study/${studyId}`, { params: { taskDate } });

export const getStudyTaskComment = (studyId: number, taskDate: string) =>
  axiosInstance.get<GetStudyTaskCommentRes[]>(`/api/study-comment/study/${studyId}`, { params: { taskDate } });

export const postStudyTask = ({ studyId, body }: { studyId: number; body: PostStudyTaskReq }) =>
  axiosInstance.post(`/api/tasks/study/${studyId}`, body);

export const patchStudyTask = ({ taskId, body }: { taskId: number; body: PatchStudyTaskReq }) =>
  axiosInstance.patch(`/api/tasks/${taskId}`, body);

export const deleteStudyTask = (taskId: number) => axiosInstance.delete(`/api/tasks/${taskId}`);
