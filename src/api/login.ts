import api from '@/api/api';
import APP_CONST from '@/constants';

type Data = {
  code: string;
  state: string;
};

type Reponse = {
  credential: string;
};

export const login = (data: Data) => api.post<Reponse, Data>({ url: APP_CONST.API_URL.LOGIN, data });
