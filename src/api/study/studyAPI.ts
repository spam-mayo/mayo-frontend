import axiosInstance from '@/api/axiosInstance';
import type { GetMyStudyRes, PaginationRes } from '@/api/study/studyTypes';

export const getMypageStudy = (page: number, params?: { status?: string; tab?: string }) => {
  return axiosInstance.get<PaginationRes<GetMyStudyRes>>('/api/study/my-page?size=10', { params: { page, ...params } });
};
