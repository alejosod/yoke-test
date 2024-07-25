import Svg, { Line } from 'react-native-svg';

const size = 23

export const CloseSvg = () => {
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
            <Line x1="18" y1="6" x2="6" y2="18"/>
            <Line x1="6" y1="6" x2="18" y2="18"/>
        </Svg>
    )
}
