import { Text, View } from "react-native";

interface Props {
  name: string;
  age: number;
  location: string;
}

export const Child = (props: Props) => {
  return (
    <View>
      <Text>{props.name}</Text>
      <Text>{props.age}</Text>
      <Text>{props.location}</Text>
    </View>
  );
};
