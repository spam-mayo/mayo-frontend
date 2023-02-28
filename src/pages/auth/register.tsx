// import type { FC } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// enum Field {
//   nofield = '선택 안 함',
//   frontend = 'frontend',
//   backend = 'backend',
//   design = 'design',
//   plan = 'plan',
//   other = 'other',
// }

// interface IFormInput {
//   name: string;
//   email: string;
//   password: string;
//   password_check: string;
//   field?: Field;
// }

// const schema = yup
//   .object({
//     name: yup
//       .string()
//       .required('이름을 입력해주세요.')
//       .matches(/^[가-힣a-zA-Z0-9]{2,16}$/, '특수문자와 공백 없이 2자 이상 입력해주세요.'),
//     email: yup
//       .string()
//       .required('이메일을 입력해주세요.')
//       .matches(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, '이메일 형식에 맞지 않습니다.'),
//     password: yup
//       .string()
//       .required('비밀번호를 입력해주세요')
//       .matches(
//         /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
//         '영문, 특수문자, 숫자 포함한 8자 이상 16자 미만으로 입력해주세요.'
//       ),
//     password_check: yup
//       .string()
//       .required('비밀번호를 확인해주세요.')
//       .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
//   })
//   .required();

// export const Register: FC = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<IFormInput>({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       name: '',
//       email: '',
//       password: '',
//       password_check: '',
//       field: '선택 안 함',
//     },
//   });
//   const onSubmit: SubmitHandler<IFormInput> = (data) => alert(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>이름</label>
//         <input type="text" {...register('name')} placeholder="이름을 입력하세요." />
//         {errors.name && <p>{errors.name.message}</p>}
//       </div>
//       <div>
//         <label>이메일</label>
//         <input type="email" {...register('email')} placeholder="이메일을 입력하세요." />
//         {errors.email && <p>{errors.email.message}</p>}
//       </div>
//       <div>
//         <label>비밀번호</label>
//         <input type="password" {...register('password')} placeholder="비밀번호를 입력하세요." />
//         {errors.password && <p>{errors.password.message}</p>}
//       </div>
//       <div>
//         <label>비밀번호 확인</label>
//         <input
//           type="password"
//           {...register('password_check', {
//             required: true,
//           })}
//           placeholder="비밀번호를 확인해주세요."
//         />
//         {errors.password_check && <p>{errors.password_check.message}</p>}
//       </div>
//       <div>
//         <label>활동분야 (선택)</label>
//         <div>
//           <select {...register('field')}>
//             <option value="선택 안 함">선택 안 함</option>
//             <option value="frontend">프론트엔드</option>
//             <option value="backend">백엔드</option>
//             <option value="design">디자인</option>
//             <option value="plan">기획</option>
//             <option value="other">기타</option>
//           </select>
//         </div>
//       </div>

//       <button type="submit">회원가입</button>
//       <div>
//         <p>이미 게정이 있으신가요?</p>
//         <button>로그인</button>
//       </div>
//     </form>
//   );
// };
