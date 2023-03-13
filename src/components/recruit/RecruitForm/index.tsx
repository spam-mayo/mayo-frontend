import Button from '@/components/common/Button';
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
      <div>
        <Button color="gray" outline>
          취소
        </Button>
        <Button>생성하기</Button>
      </div>
    </div>
  );
};

export default RecruitForm;
