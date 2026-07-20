export default function InnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
  <p>filter</p>
  {children}
  </>;
}