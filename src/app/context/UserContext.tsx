import React, { createContext, useEffect } from 'react';

import { User, Action, useUser, ActionTypes } from '@/app/hooks/userUser';
import { useGetUserInfoQuery } from '@/api';

type UserContextType = {
  state: User;
  setState: React.Dispatch<Action>;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { state, dispatch } = useUser();
  const { userInfo, isLoading } = useGetUserInfoQuery();

  useEffect(() => {
    if (isLoading) return;

    dispatch({
      type: ActionTypes.InitUser,
      payload: {
        profile: {
          name: userInfo?.name ?? '',
          nameKana: userInfo?.nameKana ?? '',
          tel: userInfo?.phone ?? '',
          email: userInfo?.email ?? '',
          postalCode: userInfo?.postalCode ?? '',
          gender: userInfo?.gender ?? 'male',
          birth: new Date(userInfo?.birthday ?? '')
        },
        occupations: userInfo?.occupations ?? [{ occupationType: '', name: '' }],
        survey: {
          discussionTopics: userInfo?.discussionTopics,
          potentialReferrals: userInfo?.potentialReferrals ?? '',
          isAccepted: false
        },
        bio: userInfo?.bio,
        isRegistered: userInfo?.isRegistered
      }
    });
  }, [dispatch, isLoading, userInfo]);

  if (isLoading) {
    return <UserContext.Provider value={{ state, setState: dispatch }}>{null}</UserContext.Provider>;
  }

  return <UserContext.Provider value={{ state, setState: dispatch }}>{children}</UserContext.Provider>;
};
