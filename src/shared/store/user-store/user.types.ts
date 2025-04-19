import {User} from 'entities/user';

export type UserState = {
  user: User | null;
  setUser: (user: User | null) => void;
};
