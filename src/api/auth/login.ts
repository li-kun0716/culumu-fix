import api from '@/api/api';
import API_URL from '@/api/url';

type Data = {
  code: string;
  state: string;
};

type Response = {
  credential: string;
};

export const login = (data: Data) => api.post<Response, Data>({ url: API_URL.LOGIN, data });
