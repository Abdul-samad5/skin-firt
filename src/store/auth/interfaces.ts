export interface RegisterProps {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
}

export interface LoginProps {
  email: string;
  password: string;
}

export type AccessTokenProps = string | null; // AccessToken is a simple string or null

export interface InitialStateProps {
  loading: boolean;
  error: string | null;
  user: object | null;
  success: boolean;
  accessToken: AccessTokenProps;
  login: ({ email, password }: LoginProps) => void;
  register: ({ last_name, first_name, email,username, password }: RegisterProps) => void;
  resetStore: () => void;
  logout: () => void;
}
