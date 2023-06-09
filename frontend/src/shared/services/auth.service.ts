import { AxiosUrl } from '@/config/axios-config';
import { GenericResponse, LoggedInModel } from '@/shared/models';
import { LoginUserDto } from '../dtos/auth';

const login = (data: LoginUserDto): Promise<GenericResponse<LoggedInModel>> => {
  return AxiosUrl.post('/auth/login', data).then(res => {
    return res.data;
  });
};

const logout = (): Promise<GenericResponse<string>> => {
  return AxiosUrl.post('/auth/logout').then(res => {
    return res.data;
  });
};

export const AuthService = { login, logout };
