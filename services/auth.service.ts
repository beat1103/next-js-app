import { registerUser } from "@/lib/api/auth";
import type { ApiSignupResponse } from "@/types/auth/api";
import type { SignupInput } from "@/types/auth/signup";

export async function signupService(
  input: Omit<SignupInput, "passwordConfirm">
): Promise<ApiSignupResponse> {
  return registerUser({
    logInId: input.logInId,
    password: input.password,
    email: input.email,
    name: input.name,
    phone: input.phone,
  });
}
