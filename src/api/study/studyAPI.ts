import axiosInstance from '@/api/axiosInstance';
import type { CommentRes } from '@/api/recruit/recruitTypes';
import type {
  GetMyStudyRes,
  GetStudyDetailRes,
  GetStudyUserRes,
  PaginationRes,
  PutStudyUser,
  GetStudyTaskRes,
  StudyCommentReq,
  PostStudyTaskReq,
  PatchStudyTaskReq,
  PostStudyReq,
  PatchStudyCommentReq,
  PatchNoticeReq,
  GetNoticeRes,
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

export const getStudyTaskComments = (studyId: number, taskDate: string) =>
  axiosInstance.get<CommentRes[]>(`/api/study-comment/study/${studyId}`, { params: { taskDate } });

export const postStudyTask = ({ studyId, body }: { studyId: number; body: PostStudyTaskReq }) =>
  axiosInstance.post(`/api/tasks/study/${studyId}`, body);

export const patchStudyTask = ({ taskId, body }: { taskId: number; body: PatchStudyTaskReq }) =>
  axiosInstance.patch(`/api/tasks/${taskId}`, body);

export const deleteStudyTask = (taskId: number) => axiosInstance.delete(`/api/tasks/${taskId}`);

export const postStudyComment = ({ studyId, body }: { studyId: number; body: StudyCommentReq }) =>
  axiosInstance.post(`/api/study-comment/study/${studyId}`, body);

export const deleteStudyComment = (studyCommentId: number) =>
  axiosInstance.delete(`/api/study-comment/${studyCommentId}`);

export const patchStudyComment = ({ studyCommentId, body }: { studyCommentId: number; body: PatchStudyCommentReq }) =>
  axiosInstance.patch(`/api/study-comment/${studyCommentId}`, body);

export const postStudy = (body: PostStudyReq) => axiosInstance.post(`/api/study`, body);

export const postStudyGroup = (studyId: number) => axiosInstance.post(`/api/study/${studyId}/group`);

export const deleteStudy = (studyId: number) => axiosInstance.delete(`/api/study/${studyId}`);

export const getStudyNotice = (studyId: number) => axiosInstance.get<GetNoticeRes>(`/api/study/${studyId}/notice`);

export const patchStudyNotice = ({ studyId, ...body }: PatchNoticeReq) =>
  axiosInstance.patch(`/api/study/${studyId}/notice`, body);

export const deleteStudyNotice = (studyId: number) => axiosInstance.delete(`/api/study/${studyId}/notice`);
