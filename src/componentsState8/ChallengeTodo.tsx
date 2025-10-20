import { useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";

interface TextProps {
  id: string;
  text: string;
}

export const Todo = () => {
  const [todo, setTodo] = useState<{ id: string; text: string }[]>([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text) {
      setTodo([...todo, { id: Date.now().toString(), text }]);
      setText("");
    }
  };

  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 22,
          fontWeight: 400,
          textTransform: "uppercase",
        }}
      >
        Add your todos here
      </Text>
      <View>
        <TextInput
          placeholder="Make your plan"
          value={text}
          onChangeText={(text) => setText(text)}
          style={{
            height: 40,
            padding: 5,
            marginHorizontal: 8,
            borderWidth: 1,
            marginTop: 5,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            width: "95%",
            margin: "auto",
            marginTop: 10,
            cursor: "pointer",
          }}
        >
          <Button title="Make Plane" color={"#080505ff"} onPress={addTodo} />
        </View>
        <View style={{ padding: 10, marginTop: 4 }}>
          <FlatList
            data={todo}
            keyExtractor={(t) => t.id}
            renderItem={({ item }) => (
              <View
                style={{ padding: 8, borderRadius: 6, backgroundColor: "#fff" }}
              >
                <Text style={{ fontSize: 18, fontWeight: "400" }}>
                  {item.text}
                </Text>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            contentContainerStyle={{ padding: 10 }}
            style={{ backgroundColor: "#ded1d1ff", marginBottom: 3 }}
          />
        </View>
      </View>
    </View>
  );
};
