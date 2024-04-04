import { user } from './types';
export interface staff {
  first_name: string;
  last_name: string;
  phone: string;
  password: string;
  email: string;
  role: string;
}

export interface personData {
  message: string;
  person: user;
  status?: number | string;
  token: string;
}
