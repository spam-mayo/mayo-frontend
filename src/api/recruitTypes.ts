export interface Recruit {
  studyId: number;
  title: string;
  startDate: string;
  endDate: string;
  studyStatus: string;
  online: boolean;
  stack: {
    stackId: string | number;
    stackName: string;
  }[];
  checkLikes: boolean;
  owner: {
    userId: number;
    userName: string;
    userProfileUrl: string;
  };
  pageNum: number;
}
