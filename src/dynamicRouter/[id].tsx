import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const RouteDynamic = () => {
    const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Dynamic Route Page</Text>
      <Text>The ID is: {id}</Text>
    </View>
  );
};

export default RouteDynamic;
