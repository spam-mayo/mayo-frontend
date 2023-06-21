export interface RecruitStack {
  stack: {
    stackId: string | number;
    stackName: string;
  }[];
}

export interface RecruitOwner {
  owner: {
    userId: number;
    userName: string;
    userProfileUrl: string;
  };
}

export interface Recruit extends RecruitStack, RecruitOwner {
  studyId: number;
  title: string;
  startDate: string;
  endDate: string;
  studyStatus: string;
  online: boolean;
  checkLikes: boolean;
}

export interface PostRecruitReq {
  offerIntro: string;
  offerRule: string;
  studyId: number;
}

export interface GetRecruitRes extends PostRecruitReq {
  offerId: number;
}

export interface GetRecruitRes extends PostRecruitReq {
  offerId: number;
}

export interface PostRecruitCommentReq {
  comment: string;
  secret: boolean;
}

export interface GetRecruitCommentRes {
  comment: string;
  createdAt: string;
  offerCommentId: number;
  profileUrl: string;
  replies: string[];
  secret: boolean;
  userId: number;
  userName: string;
}
