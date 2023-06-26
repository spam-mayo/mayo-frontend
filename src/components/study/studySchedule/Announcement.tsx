import type { FC } from 'react';
import useNoticeQuery from '@/queries/study/useNoticeQuery';
import changeToPlainText from '@/utils/changeToPlainText';

interface Props {
  studyId?: string;
}

const Announcement: FC<Props> = ({ studyId }) => {
  const { data, isLoading, isError } = useNoticeQuery(Number(studyId));

  if (isLoading) return <div>로딩중입니다..</div>;

  if (isError) return <div>에러가 발생했습니다.</div>;

  const noticeContent = changeToPlainText(data.noticeContent);

  return (
    <div className="announcement-container">
      <p className="announcement-title">공지사항</p>
      {data.noticeContent ? (
        <p className="announcement-list" dangerouslySetInnerHTML={{ __html: noticeContent ?? '' }} />
      ) : (
        <p className="announcement-list">아직 등록된 공지사항이 없습니다. </p>
      )}
    </div>
  );
};

export default Announcement;
