import { getStudyDetail } from '@/api/study/studyAPI';
import Button from '@/components/common/Button';
import StudyDetailIntro from '@/components/common/StudyDetailIntro';
import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';

const RecruitCreate: FC = () => {
  const studyId = 266;

  const { data } = useQuery({
    queryFn: () => getStudyDetail(Number(studyId)),
    queryKey: ['studyDetail', studyId],
    select: ({ data }) => data,
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-area">
            <button>
              <i className="icon-arrow-left"></i>
            </button>
            <p>구인 글 생성하기</p>
            <div />
          </div>
          <StudyDetailIntro detailData={data} />

          <div className="add-recruit-box">
            <div className="recruit-intro">
              <p>스터디 소개</p>
              <textarea placeholder="내용을 작성해주세요." required name="recruit-intro" />
            </div>

            <div className="recruit-rule">
              <p>스터디 규칙</p>
              <textarea placeholder="내용을 작성해주세요." required name="recruit-intro" />
            </div>
            <div className="button-area">
              <Button size="large" color="gray" outline>
                취소
              </Button>
              <Button size="large" type="submit">
                생성하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitCreate;
