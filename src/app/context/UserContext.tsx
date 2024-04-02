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
  const { userInfo } = useGetUserInfoQuery();

  useEffect(() => {
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
          year: new Date(userInfo?.birthday ?? '2000-01-01').getFullYear().toString(),
          month: new Date(userInfo?.birthday ?? '2000-01-01').getMonth() + 1 + '',
          day: new Date(userInfo?.birthday ?? '2000-01-01').getDay().toString()
        },
        occupations: userInfo?.occupations ?? [{ occupationType: '', name: '' }],
        survey: {
          talkAbout: userInfo?.discussionTopics,
          introduction: userInfo?.potentialReferrals ?? '',
          isAccepted: false
        },
        bio: userInfo?.bio
      }
    });
  }, [dispatch, userInfo]);

  return <UserContext.Provider value={{ state, setState: dispatch }}>{children}</UserContext.Provider>;
};
