import type { SelectOption } from '@/components/auth/Select';

export const mystudyOption: SelectOption[] = [
  { label: '전체', value: 'all' },
  { label: '모집전', value: 'before_recruitment' },
  { label: '모집중', value: 'recruiting' },
  { label: '진행중', value: 'ongoing' },
  { label: '폐쇄', value: 'closed' },
  { label: '종료', value: 'end' },
];

export const applyStudyOption: SelectOption[] = [
  { label: '전체', value: 'all' },
  { label: '대기중', value: '대기중' },
  { label: '승인', value: '승인' },
  { label: '거절', value: '거절' },
];
