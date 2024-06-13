import { Typography } from "../props";

export default function H4(props: Typography) {
    return (
        <>
            <h1 style={{
                color: props.color
            }} className={"text-2xl font-normal"}>{props.text}</h1>
        </>
    )
}