import type { Stack } from '@/api/auth/types';

export interface GetMyStudyReq {
  page: number;
  studyStatus?: string;
  tab?: string;
}

export interface PaginationRes<T> {
  data: T[];
  pageNum: number;
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
