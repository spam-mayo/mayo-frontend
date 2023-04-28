import axiosInstance from '@/api/axiosInstance';
import type { PostStudyPayload } from '@/api/mockTypes';

export const postStudy = (payload: PostStudyPayload) => axiosInstance.post<{ studyId: number }>('/api/study', payload);
