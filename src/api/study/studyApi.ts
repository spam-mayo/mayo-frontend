import axiosInstance from '@/api/axiosInstance';
import type { getStudyDetailRes } from '@/api/study/studyTypes';

export const getStudyDetail = (studyId: number) => axiosInstance.get<getStudyDetailRes>(`/api/study/${studyId}`);
