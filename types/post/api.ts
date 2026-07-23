/** API(백엔드) 응답 DTO — lib/api 에서만 사용 */
export interface ApiPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
