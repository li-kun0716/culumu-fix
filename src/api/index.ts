import { useMutation, useQuery } from '@tanstack/react-query';

import apiClient from '@/api/apiClient';
import API_URL from '@/api/url';

export type SuccessResponse = { code: string; message?: string; details: string };

// login
export type LoginInput = { code: string; state: string };
export type LoginRes = { credential: string };

export const login = (data: LoginInput) => apiClient.post<LoginRes, LoginInput>({ url: API_URL.LOGIN, data });

export const useLoginMutation = () => {
  const mutation = useMutation({ mutationFn: (data: LoginInput) => login(data) });
  return { updateMe: mutation.mutateAsync, loading: mutation.isPending, isError: mutation.isError };
};

// updateMe
export type UserInput = Record<'name' | 'nameKana' | 'email' | 'birthday' | 'gender' | 'phone' | 'postalCode', string>;

export const updateUser = (data: UserInput) =>
  apiClient.patch<SuccessResponse, UserInput>({ url: API_URL.USER_ME, data });

export const useUpdateMeMutation = () => {
  const mutation = useMutation({ mutationFn: (user: UserInput) => updateUser(user) });
  return { updateMe: mutation.mutateAsync, loading: mutation.isPending, isError: mutation.isError };
};

// setUserOccupations
export type OccupationInput = {
  occupationType: string;
  name: string;
  organization?: string;
  positionType?: string;
  position?: string;
};

export const setUserOccupations = (data: { occupations: OccupationInput[] }) =>
  apiClient.post<SuccessResponse, OccupationInput[]>({ url: API_URL.OCCUPATION, data });

export const useSetUserOccupationsMutation = () => {
  const mutation = useMutation({
    mutationFn: (occupations: { occupations: OccupationInput[] }) => setUserOccupations(occupations)
  });
  return { setUserOccupations: mutation.mutateAsync, loading: mutation.isPending, isError: mutation.isError };
};

// setUserSurvey
export type SurveyInput = { discussionTopics?: string; potentialReferrals: string };

export const setUserSurvey = (data: SurveyInput) =>
  apiClient.post<SuccessResponse, SurveyInput>({ url: API_URL.SURVEY, data });

export const useSetUserSurveyMutation = () => {
  const mutation = useMutation({ mutationFn: (survey: SurveyInput) => setUserSurvey(survey) });
  return { setUserSurvey: mutation.mutateAsync, loading: mutation.isPending, isError: mutation.isError };
};

// get user profile
const getUserInfo = () => apiClient.get<UserInfo>({ url: API_URL.USER_PROFILE });

export const useGetUserInfoQuery = () => {
  const query = useQuery({ queryKey: ['userInfo'], queryFn: () => getUserInfo() });
  return { userInfo: query.data?.data, isLoading: query.isLoading, isError: query.isError, refetch: query.refetch };
};

//set user profile
const updateUserInfo = (data: UserInfo) =>
  apiClient.post<SuccessResponse, UserInfo>({ url: API_URL.USER_PROFILE, data });
export const useUpdateUserInfoMutation = () => {
  const mutation = useMutation({ mutationFn: (data: UserInfo) => updateUserInfo(data) });
  return { updateUserInfo: mutation.mutateAsync, loading: mutation.isPending, isError: mutation.isError };
};

// setUserBio
export type BIoInput = { bio?: string };

export const setUserBio = (data: BIoInput) => apiClient.post<SuccessResponse, BIoInput>({ url: API_URL.BIO, data });

export const useSetUserBioMutation = () => {
  const mutation = useMutation({ mutationFn: (bio: BIoInput) => setUserBio(bio) });
  return { setUserBio: mutation.mutateAsync, loading: mutation.isPending, isError: mutation.isError };
};
