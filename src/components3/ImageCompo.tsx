import { Image, Text, View } from "react-native"

export const ImageCompo = () => {

    return(
        <View>
            <Text>Lets Explore image's</Text>
            <Image source={require("../assets/img.jpeg")}  style={{width: 350, height: 350}} />
        </View>
    )
}