import { Typography } from "../props";

export default function H3(props: Typography) {
    return (
        <>
            <h1 style={{
                color: props.color,
                fontWeight: props.fontWeight
            }} className={"text-5xl"}>{props.text}</h1>
        </>
    )
}