import type { FC } from 'react';

interface Stack {
  stackId: number;
  stack: string;
}

type StackArray = Stack[];

interface Props {
  userName: string;
  email: string;
  field: string;
  stack?: StackArray;
}

const UserInfo: FC<Props> = ({ userName, email, field, stack }) => {
  return (
    <div>
      <div>
        기본 정보
        <p>이름 : {userName}</p>
        <p>이메일 : {email}</p>
      </div>
      <div>
        추가 정보
        <div>활동분야 : {field}</div>
        <div>
          관심분야 :
          {stack?.map((el) => {
            return <p key={el.stackId}>{el.stack}</p>;
          })}
        </div>
      </div>
      <div>비밀번호</div>
      <div>회원탈퇴</div>
    </div>
  );
};

export default UserInfo;
