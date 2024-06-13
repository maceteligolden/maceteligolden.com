import { Footer, Navbar } from ".";

export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            <div className="h-100 w-100">
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </>
    )
}