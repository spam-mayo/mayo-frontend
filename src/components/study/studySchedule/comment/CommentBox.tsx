import type { FC } from 'react';
import SingleUserComment from '@/components/study/studySchedule/comment/SingleUserComment';
import type { CommentFormValue } from '@/components/common/AddUserComment';
import type { CommentRes } from '@/api/recruit/recruitTypes';

interface Props {
  comments: CommentRes[];
  onDeleteComment: (id: number) => void;
  onSubmitPatchComment: ({ data, id }: { data: CommentFormValue; id: number }) => void;
}

const CommentBox: FC<Props> = ({ comments, onDeleteComment, onSubmitPatchComment }) => {
  return (
    <div className="comment-list-container">
      {!comments.length ? (
        <p>아직 아무 댓글도 달리지 않았어요...</p>
      ) : (
        comments?.map((list) => (
          <SingleUserComment
            key={list.studyCommentId || list.offerCommentId}
            commentItem={list}
            onDeleteComment={onDeleteComment}
            onSubmitPatchComment={onSubmitPatchComment}
          />
        ))
      )}
    </div>
  );
};

export default CommentBox;
