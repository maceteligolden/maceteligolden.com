import { H1, H3 } from "@/components/typography";
import { Projects } from "@/lib/constant";

export default function ProjectSection() {
    return (
        <>
            <section className={"w-100 h-100 bg-[#000] py-10 px-[50px] md:py-10 md:px-[100px] flex flex-col gap-4 rounded-b-[48px]"}>
                <H1 
                    color="#FFF"
                    text={"SELECTED PROJECTS."}
                />

                <div className={"flex flex-col gap-6 text-[#FFF]"}>
                    <div className="flex gap-9">
                        <div className="grow">
                            <div className="w-100 flex flex-col gap-6">
                                <div className="w-100 h-[600px] bg-[#00FF] py-[20px] rounded-2xl">

                                </div>
                                <H3 color="#FFF" text="Repore"/>
                            </div>
                        </div>
                        <div className="flex-none w-[600px] self-center">
                            <div className="w-100 flex flex-col gap-6">
                                <div className="w-100 h-[400px] bg-[#00FF] py-[20px] rounded-2xl">

                                </div>
                                <H3 color="#FFF" text="Repore"/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex gap-9">
                        <div className="flex-none w-[600px] self-center">
                            <div className="w-100 flex flex-col gap-6">
                                <div className="w-100 h-[400px] bg-[#00FF] py-[20px] rounded-2xl">

                                </div>
                                <H3 color="#FFF" text="Repore"/>
                            </div>
                        </div>
                        <div className="grow">
                            <div className="w-100 flex flex-col gap-6">
                                <div className="w-100 h-[600px] bg-[#00FF] py-[20px] rounded-2xl">

                                </div>
                                <H3 color="#FFF" text="Repore"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function ProjectCard() {
    return (
        <>
            <div className="flec flex-col gap-6">
                <div className="w-100 h-[800px] bg-[#00FF]">

                </div>
                <H3 color="#FFF" text="Repore"/>
            </div>
        </>
    )
}