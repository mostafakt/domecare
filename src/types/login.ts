export interface ILoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
  refreshToken: string;
}
export interface ILoginPayload {
  username: string;
  password: string;
}
