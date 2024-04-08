import { useContext } from 'react';

import { UserContext } from '@/app/context/UserContext';

export const useUserContext = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error('Sidebar context must be use inside SideBarProvider');
  }

  return userContext;
};
