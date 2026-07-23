"use client";

import { useActionState, useEffect, useMemo, useState } from "react";
import Link from "next/link";

import { signupAction, type SignupActionState } from "@/actions/auth";
import { Button } from "@/components/atoms/button";
import { FormField } from "@/components/molecules/FormField";
import {
  emptySignupValues,
  getSignupFieldErrors,
  type SignupFieldErrors,
  type SignupInput,
} from "@/types/auth/signup";

const initialState: SignupActionState = { ok: false };

type TouchedFields = Partial<Record<keyof SignupInput, boolean>>;

export function SignupForm() {
  const [state, formAction, isPending] = useActionState(
    signupAction,
    initialState
  );
  const [values, setValues] = useState<SignupInput>(emptySignupValues);
  const [touched, setTouched] = useState<TouchedFields>({});

  useEffect(() => {
    if (!state.values) return;
    setValues((prev) => ({
      ...prev,
      ...state.values,
    }));
  }, [state.values]);

  const realtimeErrors = useMemo(
    () => getSignupFieldErrors(values),
    [values]
  );

  const fieldErrors = useMemo(() => {
    const next: SignupFieldErrors = {};
    (Object.keys(values) as (keyof SignupInput)[]).forEach((key) => {
      if (!touched[key] && !state.fieldErrors?.[key]) return;
      next[key] = state.fieldErrors?.[key] ?? realtimeErrors[key];
    });
    return next;
  }, [realtimeErrors, state.fieldErrors, touched, values]);

  function updateField(name: keyof SignupInput, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  function handleBlur(name: keyof SignupInput) {
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  return (
    <form action={formAction} className="flex flex-col gap-4" noValidate>
      <FormField
        label="아이디"
        name="logInId"
        type="text"
        autoComplete="username"
        placeholder="user01"
        value={values.logInId}
        onChange={(e) => updateField("logInId", e.target.value)}
        onBlur={() => handleBlur("logInId")}
        error={fieldErrors.logInId?.[0]}
        disabled={isPending}
      />
      <FormField
        label="이메일"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="user@example.com"
        value={values.email}
        onChange={(e) => updateField("email", e.target.value)}
        onBlur={() => handleBlur("email")}
        error={fieldErrors.email?.[0]}
        disabled={isPending}
      />
      <FormField
        label="이름"
        name="name"
        type="text"
        autoComplete="name"
        placeholder="홍길동"
        value={values.name}
        onChange={(e) => updateField("name", e.target.value)}
        onBlur={() => handleBlur("name")}
        error={fieldErrors.name?.[0]}
        disabled={isPending}
      />
      <FormField
        label="휴대폰"
        name="phone"
        type="tel"
        autoComplete="tel"
        placeholder="01012345678"
        value={values.phone}
        onChange={(e) => updateField("phone", e.target.value)}
        onBlur={() => handleBlur("phone")}
        error={fieldErrors.phone?.[0]}
        disabled={isPending}
      />
      <FormField
        label="비밀번호"
        name="password"
        type="password"
        autoComplete="new-password"
        placeholder="8자 이상"
        value={values.password}
        onChange={(e) => updateField("password", e.target.value)}
        onBlur={() => handleBlur("password")}
        error={fieldErrors.password?.[0]}
        disabled={isPending}
      />
      <FormField
        label="비밀번호 확인"
        name="passwordConfirm"
        type="password"
        autoComplete="new-password"
        placeholder="비밀번호 재입력"
        value={values.passwordConfirm}
        onChange={(e) => updateField("passwordConfirm", e.target.value)}
        onBlur={() => handleBlur("passwordConfirm")}
        error={fieldErrors.passwordConfirm?.[0]}
        disabled={isPending}
      />

      {isPending ? (
        <p className="text-sm text-primary" role="status" aria-live="polite">
          회원가입 처리 중...
        </p>
      ) : state.message ? (
        <p className="text-sm text-destructive" role="status" aria-live="polite">
          {state.message}
        </p>
      ) : null}

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "가입 중..." : "회원가입"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        이미 계정이 있으신가요?{" "}
        <Link
          href="/signin"
          className="text-primary underline-offset-4 hover:underline"
        >
          로그인
        </Link>
      </p>
    </form>
  );
}
