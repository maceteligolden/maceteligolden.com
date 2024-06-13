import { Typography } from "../props";

export default function H5(props: Typography) {
    return (
        <>
            <h1 className={"text-[#0C1807] text-xl font-normal"}>{props.text}</h1>
        </>
    )
}