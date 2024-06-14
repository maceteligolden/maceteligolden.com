import { Typography } from "../props";

export default function H1(props: Typography) {
    return (
        <>
            <h1 style={{
                color: props.color
            }} className={"md:text-8xl text-5xl font-extrabold"}>{props.text}</h1>
        </>
    )
}