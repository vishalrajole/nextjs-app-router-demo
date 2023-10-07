import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KCP",
  description: "Web app",
};

export default function UnauthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div style={{ border: "1px solid red" }}>login layout goes here</div>
      <div>{children}</div>
    </div>
  );
}
