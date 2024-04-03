import { useReducer } from 'react';

export enum ActionTypes {
  InitUser = 'InitUser',
  SetUserProfile = 'SetUserProfile',
  SetUserOccupations = 'SetUserOccupations',
  SetUserSurvey = 'SetUserSurvey',
  SetUserBio = 'SetUserBio'
}

export type User = {
  profile: Record<'name' | 'nameKana' | 'tel' | 'email' | 'postalCode' | 'year' | 'month' | 'day', string> & {
    gender: 'male' | 'female' | 'other' | 'noAnswer';
    birth?: Date;
  };
  occupations: {
    occupationType: string;
    name: string;
    organization?: string;
    positionType?: string;
    position?: string;
  }[];
  survey: { discussionTopics?: string; potentialReferrals: string; isAccepted: boolean };
  bio: string | undefined;
};

type ActionPayloadType = {
  [ActionTypes.InitUser]: User;
  [ActionTypes.SetUserProfile]: User['profile'];
  [ActionTypes.SetUserOccupations]: User['occupations'];
  [ActionTypes.SetUserSurvey]: User['survey'];
  [ActionTypes.SetUserBio]: User['bio'];
};

export type Action = {
  [key in keyof ActionPayloadType]: ActionPayloadType[key] extends undefined
    ? { type: key }
    : { type: key; payload: ActionPayloadType[key] };
}[keyof ActionPayloadType];

export type StateType = User;

const initialState: StateType = {
  profile: {
    name: '',
    nameKana: '',
    email: '',
    gender: 'male',
    tel: '',
    birth: undefined,
    year: '',
    month: '',
    day: '',
    postalCode: ''
  },
  occupations: [{ occupationType: '', name: '' }],
  survey: { potentialReferrals: '', isAccepted: false },
  bio: ''
};

export const useUser = () => {
  const [state, dispatch] = useReducer((prevState: StateType, action: Action) => {
    switch (action.type) {
      case ActionTypes.InitUser:
        return { ...prevState, ...action.payload };
      case ActionTypes.SetUserProfile:
        return { ...prevState, profile: { ...prevState.profile, ...action.payload } };
      case ActionTypes.SetUserOccupations:
        return { ...prevState, occupations: action.payload };
      case ActionTypes.SetUserSurvey:
        return { ...prevState, survey: action.payload };
      case ActionTypes.SetUserBio:
        return { ...prevState, bio: action.payload };
      default:
        return { ...prevState };
    }
  }, initialState);

  return { state, dispatch };
};
