import InfoBox from '@/components/mypage/UserInfo/InfoBox';
import type { FC } from 'react';
import './infoBox.scss';

// interface Stack {
//   stackId: number;
//   stack: string;
// }

// type StackArray = Stack[];

// interface Props {
//   userName: string;
//   email: string;
//   field: string;
//   stack?: StackArray;
// }

// const UserInfo: FC<Props> = ({ userName, email, field, stack }) => {
//   return (
//     <div>
//       <div>
//         기본 정보
//         <p>이름 : {userName}</p>
//         <p>이메일 : {email}</p>
//       </div>
//       <div>
//         추가 정보
//         <div>활동분야 : {field}</div>
//         <div>
//           관심분야 :
//           {stack?.map((el) => {
//             return <p key={el.stackId}>{el.stack}</p>;
//           })}
//         </div>
//       </div>
//       <div>비밀번호</div>
//       <div>회원탈퇴</div>
//     </div>
//   );
// };

const UserInfo: FC = () => {
  return (
    <div className="userInfo">
      <InfoBox title="기본 정보" name="김현정" email="cowguswjd@naver.com" />
      <InfoBox title="추가 정보" name="김현정" email="cowguswjd@naver.com" />
      <InfoBox title="비밀번호" />
      <button className="run">회원 탈퇴</button>
    </div>
  );
};

export default UserInfo;
