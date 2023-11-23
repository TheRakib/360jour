import "../globals.css";

export const metadata = {
  title: "Jour 365",
  description: "Generated by Next + Sanity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
