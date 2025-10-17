import { Text, View, StyleSheet } from "react-native";

export const StyleSheet1 = () => {
  const styles = StyleSheet.create({
    container: { backgroundColor: "green", padding: 10, margin: 10 },
  });

  return (
    <View>
      <Text style={styles.container} />
    </View>
  );
};
