import { FlatList, Text, View } from "react-native";

export const FlatList1 = () => {
  const fruits = ["apple", "banana", "seeds", "orange"];

  return (
    <View>
      <FlatList
        data={fruits}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
};
