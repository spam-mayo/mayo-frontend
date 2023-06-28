import { type FC, useState } from 'react';
import Announcement from '@/components/study/studySchedule/Announcement';
import Calendar from '@/components/study/studySchedule/Calendar';
import { useParams } from 'react-router-dom';
import TodoList from '@/components/study/studySchedule/todoList/TodoList';
import AddUserComment, { CommentFormValue } from '@/components/common/AddUserComment';
import CommentBox from '@/components/study/studySchedule/comment/CommentBox';
import { formatDate } from '@/utils/dateForm';
import useStudyCommentsQuery from '@/queries/study/useStudyCommentsQuery';
import useDeleteStudyCommentMutation from '@/queries/study/useDeleteStudyCommentMutation';
import usePatchStudyCommentMutation from '@/queries/study/usePatchStudyCommentMutation';
import usePostStudyCommentMutation from '@/queries/study/usePostStudyCommentMutation';

interface Props {
  startDate?: string;
  endDate?: string;
}

const StudySchedule: FC<Props> = ({ startDate, endDate }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const { studyId } = useParams();
  const { data: comment } = useStudyCommentsQuery(Number(studyId), selectedDate);
  const { mutate: deleteComment } = useDeleteStudyCommentMutation();
  const { mutate: patchComment } = usePatchStudyCommentMutation();
  const { mutate: postComment } = usePostStudyCommentMutation();

  const onSubmitPostComment = (data: CommentFormValue) => {
    const taskDate = formatDate(selectedDate, 'yyyy-MM-dd');

    const body = {
      taskDate: taskDate,
      comment: data.comment,
    };

    postComment({ studyId: Number(studyId), body });
  };

  const onSubmitPatchComment = ({ data, id }: { data: CommentFormValue; id: number }) => {
    const taskDate = formatDate(selectedDate, 'yyyy-MM-dd');
    const body = {
      taskDate: taskDate,
      comment: data.comment,
    };

    patchComment({ studyCommentId: id, body });
  };

  const handleDateChange = (date: Date | null) => {
    if (date) setSelectedDate(date);
  };

  const handleDeleteComment = (id: number) => {
    deleteComment(id);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 study-schedule-container">
          <Announcement studyId={studyId} />
          <div className="detail-todo-container">
            <Calendar curDate={selectedDate} onDateChange={handleDateChange} startDate={startDate} endDate={endDate} />
            <TodoList selectedDate={selectedDate} studyId={studyId} />
          </div>
          <AddUserComment onSubmitPostComment={onSubmitPostComment} />
          <CommentBox
            comments={comment ?? []}
            onDeleteComment={handleDeleteComment}
            onSubmitPatchComment={onSubmitPatchComment}
          />
        </div>
      </div>
    </div>
  );
};

export default StudySchedule;
