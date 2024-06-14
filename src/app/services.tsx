import Accordion from "@/components/accordion";
import { AccordionProps } from "@/components/props";
import { H1, H4 } from "@/components/typography";
import { Services } from "@/lib/constant";

export default function ServicesSection() {
    return (
        <>
            <section className={"w-100 h-100 bg-[#000] py-5 px-[50px] md:py-10 md:px-[100px] md:grid md:gap-20 md:grid-cols-2 flex flex-col"}>
                <div className={" flex flex-col gap-8"}>
                    <H1 
                        color="#FFF"
                        text={"MY SERVICES."}
                    />
                     <H4 
                        color="#FFFFFF"
                        text="I’m passionate about helping individuals and businesses achieve their goals through personalized, high-quality services. "
                    />
                </div>
                <div className="flex flex-col gap-2">
                    {
                        Services.map((service: AccordionProps, index: number) => {
                            return (
                                <>
                                    <Accordion label={service.label} content={service.content}/>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}