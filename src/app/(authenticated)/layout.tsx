import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KCP",
  description: "Web app",
};

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ border: "1px solid red" }}>Sidebar</div>
      <div>{children}</div>
    </div>
  );
}
