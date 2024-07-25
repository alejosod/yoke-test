import {Image, StyleSheet} from "react-native";
const defaultAvatar = require('../assets/images/avatar2.jpg')

interface AvatarProps {
    url?: string
}

const size = 50

const styles = StyleSheet.create({
    container: {
        width: size,
        height: size,
        borderRadius: size / 2
    }
})

export const Avatar = (props: AvatarProps) => {
    return (
        <Image style={styles.container} resizeMode={'cover'} source={props.url ? {uri: props.url} : defaultAvatar}></Image>
    )
}
