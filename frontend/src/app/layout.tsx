import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docker Project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", margin: "32px" }}>{children}</body>
    </html>
  );
}
