import {createSelectors, zustandMMKVStorage} from 'shared/store/shared';
import {create} from 'zustand/index';
import {persist} from 'zustand/middleware';
import {State} from 'shared/store/state-store/state.types.ts';

const defaultState = {
  activeBillId: null,
};

export const useStateStore = createSelectors(
  create<State>()(
    persist(
      set => ({
        ...defaultState,
        setActiveBillId: id => set({activeBillId: id}),
      }),
      {
        storage: zustandMMKVStorage,
        name: 'state-storage',
      },
    ),
  ),
);
