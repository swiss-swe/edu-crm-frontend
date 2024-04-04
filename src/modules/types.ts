export type pagination = {
  page: number;
  pageSize: number;
  skip: number;
};

export type error = {
  message: string;
  status: number | string;
};

export type loginCredentials = {
  email: string;
  password: string;
};

export type user = {
  person_id: number;
  img_url: '';
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  hashed_password: string;
  is_active: boolean;
  is_admin: boolean;
  is_super_admin: boolean;
  is_teacher: boolean;
  is_student: boolean;
  created_at: string;
};
