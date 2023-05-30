import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userIdState = atom<number | null>({
  key: 'userIdState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const placeState = atom({
  key: 'placeInfo',
  default: {
    latitude: 0,
    longitude: 0,
    place: '장소 없음',
    online: false,
  },
});

export const studyPeriodState = atom({
  key: 'period',
  default: {
    startDate: '',
    endDate: '',
  },
});
