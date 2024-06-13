import { AccordionProps } from "./props";
import { H3 } from "./typography";

export default function Accordion(props: AccordionProps) {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center border-b-2 border-[#FFF] py-5">
                    <H3 
                        color="#FFF"
                        text={props.label}
                        fontWeight="bold"
                    />

                    +
                </div>
            </div>
        </>
    )
}