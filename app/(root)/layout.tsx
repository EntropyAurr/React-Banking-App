export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      SIDEBAR
      {children} {/* render the children component */}
    </main>
  );
}
