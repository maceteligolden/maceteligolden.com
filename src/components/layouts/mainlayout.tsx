export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            <main className="h-100 w-100">
                {children}
            </main>
        </>
    )
}