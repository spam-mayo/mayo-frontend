import axiosInstance from '@/api/axiosInstance';
import type {
  GetMyStudyRes,
  GetStudyDetailRes,
  GetStudyTaskCommentRes,
  GetStudyTaskRes,
  PaginationRes,
} from '@/api/study/studyTypes';

export const getMypageStudy = (page: number, params?: { status?: string; tab?: string; approvalStatus?: string }) => {
  return axiosInstance.get<PaginationRes<GetMyStudyRes>>('/api/study/my-page?size=8', { params: { page, ...params } });
};

export const getStudyDetail = (studyId: number) => axiosInstance.get<GetStudyDetailRes>(`/api/study/${studyId}`);

export const getStudyTask = (studyId: number, taskDate: string) =>
  axiosInstance.get<GetStudyTaskRes>(`/api/tasks/study/${studyId}`, { params: { taskDate } });

export const getStudyTaskComment = (studyId: number, taskDate: string) =>
  axiosInstance.get<GetStudyTaskCommentRes[]>(`/api/study-comment/study/${studyId}`, { params: { taskDate } });
