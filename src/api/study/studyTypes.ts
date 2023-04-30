import type { Stack } from '@/api/auth/types';

export interface PaginationRes<T> {
  data: T[];
  pageInfo: {
    totalPages: number;
  };
}

export interface GetMyStudyRes {
  studyId: number;
  title: string;
  startDate: string;
  endDate: string;
  studyStatus: string;
  stack: Stack[];
}

export type StudyOwner = {
  userId: number;
  userName: string;
  email: string;
  field: string;
  userProfileUrl: string;
};

export interface GetStudyDetailRes {
  studyId: number;
  studyName: string;
  title: string;
  startDate: string;
  endDate: string;
  personnel: string;
  place: string;
  latitude: number;
  longitude: number;
  stack: Stack[];
  owner: StudyOwner;
}

export interface GetStudyUserRes {
  userId: number;
  userName: string;
  profileUrl: string;
  applicationDate: string;
}

export interface PutStudyUser {
  studyId: number;
  userId: number;
}

export interface GetStudyTaskRes {
  taskId: number;
  taskDate: string;
  task: string;
}

export interface GetStudyTaskCommentRes {
  userName: string;
  profileUrl: string;
  createdAt: string;
  studyCommentId: number;
  comment: string;
}

export interface StudyCommentReq {
  taskId: number;
  todoDate: string;
  comment: string;
}
