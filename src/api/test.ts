import api from '@/api/api';
import APP_CONST from '@/constants';

type Reponse = {
  id: string;
  name: string;
};

export const getUsers = () => api.get<Reponse>({ url: APP_CONST.API_URL.GET_ALL_USERS });
