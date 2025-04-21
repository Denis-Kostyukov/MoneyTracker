import {createContext, FC, ReactNode, useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import defaultStyles from 'shared/lib/styles/defaultStyles.ts';
import {SubscriptionsContextProps} from 'shared/providers/SubscriptionsProvider/SubscriptionsProvider.types.ts';
import {useFinances} from 'features/finances';
import {Transaction} from 'entities/finances';
import {useStateStore} from 'shared/store/state-store';

export const SubscriptionsContext = createContext<
  SubscriptionsContextProps | undefined
>(undefined);

interface SubscriptionsProviderProps {
  children: ReactNode;
}

const SubscriptionsProvider: FC<SubscriptionsProviderProps> = ({children}) => {
  const {
    subscribeOnCategoriesUpdates,
    subscribeOnBillsUpdates,
    subscribeOnTransactionsUpdates,
  } = useFinances();

  const {activeBillId} = useStateStore();

  const categoriesSubscription = useRef<(() => void) | null>(null);
  const billsSubscription = useRef<(() => void) | null>(null);
  const transactionsSubscription = useRef<(() => void) | null>(null);

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    transactionsSubscription.current?.();
    if (activeBillId) {
      transactionsSubscription.current = subscribeOnTransactionsUpdates(
        activeBillId,
        setTransactions,
      );
    }
  }, [activeBillId]);

  useEffect(() => {
    categoriesSubscription.current?.();
    billsSubscription.current?.();

    categoriesSubscription.current = subscribeOnCategoriesUpdates();
    billsSubscription.current = subscribeOnBillsUpdates();

    return () => {
      categoriesSubscription.current?.();
      billsSubscription.current?.();
      transactionsSubscription.current?.();
    };
  }, []);

  return (
    <SubscriptionsContext.Provider value={{transactions}}>
      <View style={defaultStyles.flex}>{children}</View>
    </SubscriptionsContext.Provider>
  );
};

export default SubscriptionsProvider;
