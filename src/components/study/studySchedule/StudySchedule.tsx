import { type FC, useState } from 'react';
import Announcement from '@/components/study/studySchedule/Announcement';
import Calendar from '@/components/study/studySchedule/Calendar';
import { useParams } from 'react-router-dom';
import TodoList from '@/components/study/studySchedule/todoList/TodoList';
import AddUserComment, { CommentFormValue } from '@/components/common/AddUserComment';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '@/api/auth/authAPI';
import CommentBox from '@/components/study/studySchedule/comment/CommentBox';
import useAuth from '@/hooks/useAuth';
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
  const { userId } = useAuth();
  const { data: comment } = useStudyCommentsQuery(Number(studyId), selectedDate);
  const onDeleteComment = useDeleteStudyCommentMutation();
  const onPatchComment = usePatchStudyCommentMutation();
  const onPostComment = usePostStudyCommentMutation();

  const { data } = useQuery({
    queryFn: () => getUserById(Number(userId)),
    queryKey: ['user', userId],
  });

  const onSubmitPostComment = (data: CommentFormValue) => {
    const taskDate = formatDate(selectedDate, 'yyyy-MM-dd');

    const body = {
      taskDate: taskDate,
      comment: data.comment,
    };

    onPostComment.mutate({ studyId: Number(studyId), body });
  };

  const onSubmitPatchComment = ({ data, id }: { data: CommentFormValue; id: number }) => {
    const taskDate = formatDate(selectedDate, 'yyyy-MM-dd');
    const body = {
      taskDate: taskDate,
      comment: data.comment,
    };

    onPatchComment.mutate({ studyCommentId: id, body });
  };

  const handleDateChange = (date: Date | null) => {
    if (date) setSelectedDate(date);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 study-schedule-container">
          <Announcement />
          <div className="detail-todo-container">
            <Calendar curDate={selectedDate} onDateChange={handleDateChange} startDate={startDate} endDate={endDate} />
            <TodoList selectedDate={selectedDate} studyId={studyId} />
          </div>
          <AddUserComment profileUrl={data?.data.profileUrl} onSubmitPostComment={onSubmitPostComment} />
          <CommentBox
            comments={comment ?? []}
            onDeleteComment={onDeleteComment.mutate}
            onSubmitPatchComment={onSubmitPatchComment}
          />
        </div>
      </div>
    </div>
  );
};

export default StudySchedule;
