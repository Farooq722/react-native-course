import { Alert, Button, Pressable, Text, View } from "react-native";

export const Button1 = () => {
  return (
    <View>
      <Button
        title="ntg-btn"
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      />

      {/*
        1. onPress: Function that is called when the component is pressed. Required.
        2. onPressIn: Function that is called when the press gesture starts.
        3. onPressOut: Function that is called when the press gesture ends (or is cancelled).
        4. onLongPress: Function that is called when a long press is detected.
       */}

       <Pressable onPress={() => console.log("pressed")}>
        <Text> Press me</Text>
       </Pressable>

       <Pressable onPressIn={() => console.log("ON PRESS IN")}>
        <Text> Press me IN</Text>
       </Pressable>

       <Pressable onPressOut={() => console.log("ON PRESS OUT")}>
        <Text> Press me OUT</Text>
       </Pressable>

       <Pressable onLongPress={() => console.log("ON PRESS LONG")}>
        <Text> Press me Long</Text>
       </Pressable>
    </View>
  );
};
