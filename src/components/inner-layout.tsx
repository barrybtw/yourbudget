export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="mx-4 md:mx-16">{children}</div>
    </div>
  );
}
