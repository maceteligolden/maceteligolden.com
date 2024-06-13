import { Typography } from "../props";

export default function P(props: Typography) {
    return (
        <>
            <p style={{
                color: props.color,
                fontSize: props.fontSize,
                fontWeight: props.fontWeight
            }}>{props.text}</p>
        </>
    )
}