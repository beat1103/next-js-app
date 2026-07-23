import { z } from "zod";

export const signupSchema = z
  .object({
    logInId: z
      .string()
      .min(4, "아이디는 4자 이상이어야 합니다.")
      .max(20, "아이디는 20자 이하여야 합니다.")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "아이디는 영문, 숫자, 밑줄(_)만 사용할 수 있습니다."
      ),
    password: z
      .string()
      .min(8, "비밀번호는 8자 이상이어야 합니다.")
      .max(32, "비밀번호는 32자 이하여야 합니다."),
    passwordConfirm: z.string().min(1, "비밀번호 확인을 입력해 주세요."),
    email: z.email("올바른 이메일 형식이 아닙니다."),
    name: z
      .string()
      .min(2, "이름은 2자 이상이어야 합니다.")
      .max(20, "이름은 20자 이하여야 합니다."),
    phone: z
      .string()
      .regex(/^01[016789]\d{7,8}$/, "휴대폰 번호 형식이 올바르지 않습니다."),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirm"],
  });

export type SignupInput = z.infer<typeof signupSchema>;

export type SignupFieldErrors = Partial<
  Record<keyof SignupInput, string[] | undefined>
>;

export const emptySignupValues: SignupInput = {
  logInId: "",
  password: "",
  passwordConfirm: "",
  email: "",
  name: "",
  phone: "",
};

export function getSignupFieldErrors(values: SignupInput): SignupFieldErrors {
  const parsed = signupSchema.safeParse(values);
  if (parsed.success) return {};
  return parsed.error.flatten().fieldErrors;
}
