import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { Section } from "@/components/atoms/Section";
import { SignupForm } from "@/components/organisms/SignupForm";

export function SignupTemplate() {
  return (
    <Section className="flex flex-1 items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>회원가입</CardTitle>
          <CardDescription>
            계정을 만들고 서비스를 이용해 보세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
      </Card>
    </Section>
  );
}
