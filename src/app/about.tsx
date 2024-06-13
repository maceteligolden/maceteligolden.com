import { H1, H4 } from "@/components/typography";

export default function AboutSection() {
    return (
        <>
            <section className={"w-100 h-[100vh] bg-[#000] py-10 px-[50px] md:py-20 md:px-[100px] rounded-t-[48px] "}>
                <H1 
                    color="#FFF"
                    text={"ABOUT ME."}
                />

                <div className="w-100 h-[60vh] flex flex-row items-end justify-end relative">
                    <div className="absolute left-[30%] w-[392px] h-[504px] bg-[#22281E] z-0">

                    </div>
                    <div className="absolute bottom-[100px] right-0 w-[50%] h-[20%] z-10">
                    <H4 
                        color="#FFFFFF"
                        text="Hi, I'm Golden, a seasoned software engineer and DevOps enthusiast with a knack for transforming complex problems into elegant solutions. I've honed my skills across various domains, from frontend finesse to backend brilliance, and from cloud computing to system architecture."
                    />
                    </div>
                </div>
            </section>
        </>
    )
}