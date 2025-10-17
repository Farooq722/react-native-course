import { Button, Image, Text, View } from "react-native"


export const ExpressionJS = () => {

    const cost = 200000;
    const rating = 3.5;
    const cart = "Add To Cart"
    return(
        <View>
            <Text>${cost}</Text>
            <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWWMCHK_gJ_A5utJVN_UwvVRsI5GVmk096g&s"}} style={{ width: 200, height: 200 }}/>
            <Text>Car Name</Text>
            <Text>Rating: {rating}</Text>
            <Button title={cart}/>
        </View>
    )
}