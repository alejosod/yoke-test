import Svg, {Path} from "react-native-svg";

const size = 23

export const CheckSvg = () => {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke='white'
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M20 6L9 17l-5-5" />
        </Svg>
    )
}
