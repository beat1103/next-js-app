import { apiFetch } from "@/lib/api/client";
import { API_ENDPOINTS } from "@/lib/api/endpoints";
import type { ApiSignupRequest, ApiSignupResponse } from "@/types/auth/api";

/** HTTP only — path + API DTO. Do not call from UI/actions directly. */

export function registerUser(body: ApiSignupRequest) {
  return apiFetch<ApiSignupResponse>(API_ENDPOINTS.auth.signUp, {
    method: "POST",
    body,
    cache: { noStore: true },
  });
}
