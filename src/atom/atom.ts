import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userIdState = atom<number | null>({
  key: 'userIdState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const isLoginState = atom<boolean>({
  key: 'isLoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
