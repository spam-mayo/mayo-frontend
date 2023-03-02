import type { SelectOption } from '@/components/auth/select';

export const categoryOption: SelectOption[] = [
  { label: '선택 안 함', value: 'nofield', id: 1 },
  { label: '프론트엔드', value: 'frontend', id: 2 },
  { label: '백엔드', value: 'backend', id: 3 },
  { label: '디자인', value: 'design', id: 4 },
  { label: '기획', value: 'plan', id: 5 },
  { label: '기타', value: 'other', id: 6 },
];
