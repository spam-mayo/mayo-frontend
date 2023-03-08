import type { PatchStudyPayload, PostStudyPayload, Study, StudySummary } from '@/api/mockTypes';
import axios from 'axios';

export const getStudies = () => axios.get<StudySummary[]>('/study');

export const getStudy = (studyId: number) => axios.get<Study>(`/study/${studyId}`);

export const postStudy = (payload: PostStudyPayload) => axios.post<{ studyId: number }>('/study', payload);

export const deleteStudy = (studyId: number) => axios.delete(`/study/${studyId}`);

export const patchStudy = (payload: PatchStudyPayload & { studyId: number }) => {
  const { studyId, ...rest } = payload;
  return axios.patch<{ studyId: number }>(`/study/${studyId}`, rest);
};
