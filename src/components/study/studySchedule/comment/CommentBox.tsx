import type { FC } from 'react';
import SingleUserComment from '@/components/study/studySchedule/comment/SingleUserComment';
import type { CommentFormValue } from '@/components/common/AddUserComment';
export interface CommentData {
  comment: string;
  createdAt: string;
  offerCommentId?: number;
  profileUrl: string;
  replies?: string[];
  secret?: boolean;
  studyCommentId?: number;
  userId: number;
  userName: string;
}

interface Props {
  getComments: CommentData[];
  deleteComment: (id: number) => void;
  onSubmitPatchComment: ({ data, id }: { data: CommentFormValue; id: number }) => void;
}

const CommentBox: FC<Props> = ({ getComments, deleteComment, onSubmitPatchComment }) => {
  return (
    <div className="comment-list-container">
      {getComments?.map((list) => (
        <SingleUserComment
          key={list.comment}
          commentItem={list}
          deleteComment={deleteComment}
          onSubmitPatchComment={onSubmitPatchComment}
        />
      ))}
    </div>
  );
};

export default CommentBox;
