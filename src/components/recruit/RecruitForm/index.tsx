import Editor from '@/components/common/Editor';

const RecruitForm = () => {
  return (
    <div>
      <section>
        <p>스터디 소개</p>
        <Editor />
      </section>
      <section>
        <p>스터디 규칙</p>
        <Editor />
      </section>
    </div>
  );
};

export default RecruitForm;
