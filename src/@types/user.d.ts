interface UserInfo {
  name: string;
  nameKana: string;
  email: string;
  birthday: string;
  gender: 'male' | 'female';
  phone: string;
  postalCode: string;
  discussionTopics: string;
  potentialReferrals: string;
  bio: string;
  occupations: Array<Occupation>;
  isRegistered: boolean;
}

interface Occupation {
  occupationType: string;
  name: string;
  organization: string;
  positionType: string;
  position: string;
}
