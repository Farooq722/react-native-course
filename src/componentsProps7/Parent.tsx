import { View } from "react-native"
import { Child } from "./Child"


export const Parent = () => {

    return(
        <View>
            <Child name={"B Farooq"} age={22} location={"vijayawada"} />
        </View>
    )
}