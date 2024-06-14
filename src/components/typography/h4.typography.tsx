import { Typography } from "../props";

export default function H4(props: Typography) {
    return (
        <>
            <h1 style={{
                color: props.color
            }} className={"md:text-2xl text-xl font-normal"}>{props.text}</h1>
        </>
    )
}