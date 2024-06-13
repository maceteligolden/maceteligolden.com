import { H1, H5 } from "@/components/typography";

export default function HeroSection() {
    return (
        <>
            <header className="h-screen w-100 flex flex-row items-center justify-center">
                <div className="text-center w-9/12 flex flex-col gap-6">
                    <H1 
                        color="#070F04"
                        text={" HELLO THERE, I’M GOLDEN."}
                    />
                    <span className="w-[40%] flex flex-row self-center">
                    <H5
                        text={"A full stack developer and a tech lead \n offering tech solutions to your tech needs"}
                    />
                    </span>
                </div>
            </header>
        </>
    )
}