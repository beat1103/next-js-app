import { cn } from "@/lib/utils";

export default function Section({ children, className = "bg-red-500" }: { children: React.ReactNode, className?: string }) {
  return (
    <section className={cn(
        "container mx-auto px-4 py-8 my-10", 
        className,
        "bg-red-500"
        )}>
      {children}
    </section>
  );
}