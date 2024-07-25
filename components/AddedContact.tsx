import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Avatar} from "@/components/Avatar";
import {CloseSvg} from "@/components/svg/Close";

interface AddedContactProps {
    onPress: () => void;
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 30,
        height: 30,
        marginLeft: 30
    },
    closeIcon: {
        backgroundColor: 'gray',
        width: 25,
        height: 25,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -5,
        right: -25,
    }
})

export const AddedContact = (props: AddedContactProps) => {
    return (
        <View style={styles.container}>
            <Avatar />
            <TouchableOpacity onPress={props.onPress} style={styles.closeIcon}>
                <CloseSvg />
            </TouchableOpacity>
        </View>
    )
}
