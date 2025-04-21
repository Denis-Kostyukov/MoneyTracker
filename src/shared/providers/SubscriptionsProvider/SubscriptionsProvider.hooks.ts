import {useContext} from 'react';
import {SubscriptionsContext} from 'shared/providers/SubscriptionsProvider/SubscriptionsProvider.tsx';

export const useSubscriptions = () => {
  const context = useContext(SubscriptionsContext);
  if (!context) {
    throw new Error(
      'useSubscriptions must be used within a SubscriptionsProvider',
    );
  }
  return context;
};
