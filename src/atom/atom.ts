import type { UserState } from '@/api/auth/types';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userState = atom<UserState>({
  key: 'userIdState',
  default: {
    userId: null,
    profileUrl: '',
  },
  effects_UNSTABLE: [persistAtom],
});
