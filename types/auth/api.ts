/** API(백엔드) 요청/응답 DTO — lib/api 에서만 사용 */

export interface ApiSignupRequest {
  logInId: string;
  password: string;
  email: string;
  name: string;
  phone: string;
}

export interface ApiSignupResponse {
  email: string;
  logInId: string;
  name: string;
  userId: string;
}
