export interface PageInfo {
  page: number;
  size: number;
  totalElements: number;
  totalPage: number;
}

export interface Study extends StudySummary {
  studyName: string;
  personnel: string;
  place: string;
  placeDetails: string;
  address: string;
  activity: string;
  period: string;
  email: string;
  field: string;
}

export interface StudySummary {
  studyId: number;
  title: string;
  startDate: string;
  endDate: string;
  studyStatus: string;
  online: boolean;
  stack: StudyStack[];
  checkLikes: boolean;
  userId: number;
  userName: string;
  userProfileUrl: string;
}

export interface StudyStack {
  stackId: number;
  stackName: string;
}

export type PostStudyPayload = Pick<
  Study,
  | 'studyName'
  | 'title'
  | 'startDate'
  | 'endDate'
  | 'personnel'
  | 'place'
  | 'placeDetails'
  | 'address'
  | 'activity'
  | 'period'
  | 'online'
> & {
  studyStacks: Array<{ stackId: number }>;
};

export type PatchStudyPayload = Omit<PostStudyPayload, 'title'>;
