import { Button, Image, Text, View } from "react-native";

export const Challenge = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 30,
        padding: 10,
        margin: 10,
      }}
    >
      <Image
        source={require("../assets/img.jpeg")}
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          objectFit: "cover",
        }}
      />
      <Text style={{ fontWeight: "bold", marginTop: 5 }}>B Farooq</Text>
      <Text style={{ marginTop: 5, fontWeight: "600" }}>
        My name is bfarooq and i love coding.
      </Text>
      <View style={{ marginTop: 10, width: "60%" }}>
        <Button
          title="Press Me"
          color={"teal"}
          onPress={() => alert("yaaayyyyyyyy")}
        />
      </View>
    </View>
  );
};
