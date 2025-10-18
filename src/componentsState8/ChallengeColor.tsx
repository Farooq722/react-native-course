import { useState } from "react";
import { Button, View } from "react-native";

export const ColorChange = () => {
  const [color, setColor] = useState("white");

  return (
    <View style={{ backgroundColor: color, height: "100%", width: "100%" }}>
      <View
        style={{
          width: "100%",
          padding: 10,
          justifyContent: "center",
          gap: 10,
          flexDirection: "row",
        }}
      >
        <Button
          title="black"
          color="#060607ff"
          onPress={() => setColor("black")}
        />
        <Button title="red" color="#f23c0aff" onPress={() => setColor("red")} />
        <Button
          title="green"
          color="#0ef03fff"
          onPress={() => setColor("green")}
        />
        <Button
          title="yellow"
          color="#b6ef1aff"
          onPress={() => setColor("yellow")}
        />
      </View>
    </View>
  );
};
