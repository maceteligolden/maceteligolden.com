import { Typography } from "../props";

export default function H1(props: Typography) {
    return (
        <>
            <h1 style={{
                color: props.color
            }} className={"text-8xl font-extrabold"}>{props.text}</h1>
        </>
    )
}