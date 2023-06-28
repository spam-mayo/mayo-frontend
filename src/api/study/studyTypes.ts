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
  studyStatus: string;
  period: string;
  online: boolean;
  stack: Stack[];
  owner: StudyOwner;
  checkLikes: boolean;
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
  userId: number;
}

export interface StudyCommentReq {
  taskDate: string;
  comment: string;
}

export type PatchStudyCommentReq = StudyCommentReq;

export interface PatchStudyTaskReq {
  task: string;
}
export interface PostStudyTaskReq extends PatchStudyTaskReq {
  taskDate: string;
}

export interface PostStudyReq {
  studyName: string;
  title: string;
  startDate: string;
  endDate: string;
  personnel: string;
  place: string;
  latitude: number;
  longitude: number;
  activity?: string[];
  period?: string;
  online: boolean;
  studyStacks?: string[];
}

export interface GetNoticeRes {
  studyId: number;
  noticeTitle: string;
  noticeContent: string;
}

export interface PatchNoticeReq {
  studyId: number;
  noticeTitle: string;
  noticeContent: string;
}
