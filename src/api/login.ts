import api from '@/api/api';
import APP_CONST from '@/constants';

type Data = {
  code: string;
  state: string;
};

type Response = {
  credential: string;
};

export const login = (data: Data) => api.post<Response, Data>({ url: APP_CONST.API_URL.LOGIN, data });
