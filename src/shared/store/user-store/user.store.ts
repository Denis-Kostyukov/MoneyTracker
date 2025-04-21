import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {UserState} from './user.types.ts';
import {createSelectors, zustandMMKVStorage} from 'shared/store/shared';

const defaultStateUser = {
  user: null,
};

export const useUserStore = createSelectors(
  create<UserState>()(
    persist(
      set => ({
        ...defaultStateUser,
        setUser: user => set({user}),
      }),
      {
        storage: zustandMMKVStorage,
        name: 'user-storage',
      },
    ),
  ),
);
