import {Transaction} from 'entities/finances';

export interface SubscriptionsContextProps {
  transactions: Transaction[];
  setActiveBillId: (billId: string) => void;
}
