import { cn } from "@/lib/utils";

export function Layout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div>
      <div className={cn(className, "mx-4 md:mx-16")}>{children}</div>
    </div>
  );
}
