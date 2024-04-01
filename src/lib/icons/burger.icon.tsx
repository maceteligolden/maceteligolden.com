import { Icon } from "../interfaces";

export default function BurgerIcon({width = "1em", height="1em", fill="currentColor"}: Icon) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path fill={fill} d="M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z"/></svg>
        </>
    )
}