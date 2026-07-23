import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";

interface FormFieldProps extends React.ComponentProps<"input"> {
  label: string;
  name: string;
  error?: string;
}

export function FormField({
  label,
  name,
  error,
  id,
  className,
  ...props
}: FormFieldProps) {
  const fieldId = id ?? name;

  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={fieldId}>{label}</Label>
      <Input
        id={fieldId}
        name={name}
        aria-invalid={!!error}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        className={className}
        {...props}
      />
      {error ? (
        <p id={`${fieldId}-error`} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
