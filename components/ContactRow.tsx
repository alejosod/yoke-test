import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Avatar} from "@/components/Avatar";
import {CheckComponent} from "@/components/CheckComponent";

interface ContactRowProps {
    checked?: boolean
    contactName: string;
    number: string
    onPress: () => void
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    checkBox: {
        marginLeft: 'auto'
    }
})

export const ContactRow = (props: ContactRowProps) => {
    return (
        <View style={styles.container}>
            <Avatar />
            <View>
                <Text>{props.contactName}</Text>
                <Text>{props.number}</Text>
            </View>
            <TouchableOpacity onPress={props.onPress}>
                <CheckComponent styles={styles.checkBox} checked={props.checked} />
            </TouchableOpacity>

        </View>
    )

}
