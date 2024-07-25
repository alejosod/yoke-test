import {View, ViewStyle} from "react-native";
import {CheckSvg} from "@/components/svg/Check";

interface CheckComponentProps {
    checked?: boolean;
    styles?: ViewStyle
}

const styles = {
    container: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
    },
    checked: {
        backgroundColor: 'blue',

    }
}

export const CheckComponent = (props: CheckComponentProps) => {
    return  (
        <View style={[styles.container, props.styles]}>
            {props.checked && <View style={styles.checked}><CheckSvg/></View>}
        </View>
    )
}
