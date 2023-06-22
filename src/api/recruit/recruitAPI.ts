import axiosInstance from '@/api/axiosInstance';
import type {
  CommentRes,
  GetRecruitRes,
  PatchRecruitReq,
  PostRecruitCommentReq,
  PostRecruitReq,
  Recruit,
} from '@/api/recruit/recruitTypes';

interface PaginationResponse<T> {
  data: T;
  pageNum: number;
  pageInfo: {
    totalPages: number;
  };
}

export const getRecruits = async (pageNum: number, category: string | null, sort: string, search: string | null) => {
  let url = `/api/study?page=${pageNum}&size=12&sort=${sort}`;

  if (category) {
    url += `&field=${category}&search=${search}`;
  }

  if (search) {
    url += `&search=${search}`;
  }

  const response = await axiosInstance.get<PaginationResponse<Recruit[]>>(url);
  return response.data;
};

// export const getRecruits = (pageNum: number) =>
//   axiosInstance.get<PaginationResponse<Recruit[]>>(`/api/study?page=${pageNum}&size=12`);

// export const getSearch = (pageNum: number, field: string, sort: string, search: string | null) =>
//   axiosInstance.get(`api/study?page=${pageNum}&size=12&field=${field}&sort=${sort}&search=${search}`);

// export const getSearchNofield = (pageNum: number, sort: string, search: string | null) =>
//   axiosInstance.get(`api/study?page=${pageNum}&size=12&sort=${sort}&search=${search}`);

export const postRecruit = ({ studyId, ...body }: PostRecruitReq) =>
  axiosInstance.post(`/api/offer/study/${studyId}`, body);

export const getRecruit = (studyId: number) => axiosInstance.get<GetRecruitRes>(`/api/offer/study/${studyId}`);

export const postRecruitComment = ({ studyId, body }: { studyId: number; body: PostRecruitCommentReq }) =>
  axiosInstance.post(`/api/offer-comment/study/${studyId}`, body);

export const getRecruitComment = (studyId: number) =>
  axiosInstance.get<CommentRes[]>(`/api/offer-comment/study/${studyId}`);

export const patchRecruitComment = ({
  offerCommentId,
  body,
}: {
  offerCommentId: number;
  body: PostRecruitCommentReq;
}) => axiosInstance.patch(`/api/offer-comment/${offerCommentId}`, body);

export const deleteRecruitComment = (offerCommentId: number) =>
  axiosInstance.delete(`/api/offer-comment/${offerCommentId}`);

export const postRecruitLikes = (studyId: number) => axiosInstance.post(`/api/study/${studyId}/likes`);

export const patchRecruit = ({ offerId, ...body }: PatchRecruitReq) =>
  axiosInstance.patch(`/api/offer/${offerId}`, body);
