import type { FC } from 'react';
import SingleUserComment from '@/components/study/studySchedule/comment/SingleUserComment';
import type { CommentFormValue } from '@/components/common/AddUserComment';
import type { CommentRes } from '@/api/recruit/recruitTypes';

interface Props {
  comments: CommentRes[];
  deleteComment: (id: number) => void;
  onSubmitPatchComment: ({ data, id }: { data: CommentFormValue; id: number }) => void;
}

const CommentBox: FC<Props> = ({ comments, deleteComment, onSubmitPatchComment }) => {
  return (
    <div className="comment-list-container">
      {comments?.map((list) => (
        <SingleUserComment
          key={list.studyCommentId || list.offerCommentId}
          commentItem={list}
          deleteComment={deleteComment}
          onSubmitPatchComment={onSubmitPatchComment}
        />
      ))}
    </div>
  );
};

export default CommentBox;
