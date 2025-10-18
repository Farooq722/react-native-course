import { useState } from "react";
import { Button, Text, View } from "react-native";

export const State = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={{ justifyContent: "center", alignItems: "center", gap: 4 }}>
      <View>
        <Text
          style={{
            color: "black",
            fontSize: 20,
            fontWeight: 500,
            textTransform: "uppercase",
          }}
        >
          count: {count}
        </Text>
      </View>
      <View style={{ gap: 10 }}>
        <Button title="Increase Count" onPress={() => setCount(count + 1)} />
        <Button title="Decrease Count" onPress={() => setCount(count - 1)} />
      </View>
    </View>
  );
};
