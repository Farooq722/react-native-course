import { useState } from "react"
import { Button, Text, View } from "react-native"

export const Toggle = () => {

    const [isToggle, setIsToggle] = useState(false);
    console.log(isToggle)
    return(
        <View>
            <View>
                <Text>
                    {isToggle ? "On/Off" : "Off/On"}
                </Text>
            </View>

            <View>
                <Button title="Toggle" onPress={() => setIsToggle(!isToggle)}/>
            </View>
            
        </View>
    )
}