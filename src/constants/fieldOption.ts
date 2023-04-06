import type { SelectOption } from '@/components/auth/Select';

export const fieldOption: SelectOption[] = [
  { label: '선택 안 함', value: 'NO_FIELD' },
  { label: '프론트엔드', value: 'FRONTEND' },
  { label: '백엔드', value: 'BACKEND' },
  { label: '디자인', value: 'DESIGN' },
  { label: '기획', value: 'PLAN' },
  { label: '기타', value: 'OTHER' },
  { label: '풀스택', value: 'FULLSTACK' },
];
