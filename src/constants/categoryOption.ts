import type { SelectOption } from '@/components/auth/Select';

export const categoryOption: SelectOption[] = [
  { label: '선택 안 함', value: 'NO_FIELD', id: 1 },
  { label: '프론트엔드', value: 'FRONTEND', id: 2 },
  { label: '백엔드', value: 'BACKEND', id: 3 },
  { label: '디자인', value: 'DESIGN', id: 4 },
  { label: '기획', value: 'PLAN', id: 5 },
  { label: '기타', value: 'OTHER', id: 6 },
];
