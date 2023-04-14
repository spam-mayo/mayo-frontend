import type { Stack } from '@/api/auth/types';

type StudyOwner = {
  userId: number;
  userName: string;
  email: string;
  field: string;
  userProfileUrl: string;
};

export interface getStudyDetailRes {
  studyId: string;
  studyName: string;
  title: string;
  startDate: string;
  endDate: string;
  personnel: string;
  place: string;
  latitude: number;
  longitude: number;
  period: string;
  stack: Stack[];
  owner: StudyOwner;
}
