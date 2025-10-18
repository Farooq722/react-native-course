import { FlatList, Image, Text, View } from "react-native";

interface PD {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  isFeatured: boolean;
}

export const ChallengeChild = ({ products }: any) => {
  const renderitem = ({ item }: { item: PD }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: 8,
          marginVertical: 2,
          marginTop: 10,
          gap: 10,
        }}
      >
        <View>
          <Image
            source={{ uri: item.image }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
              objectFit: "cover",
            }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 20, overflow: "scroll", fontWeight: "500", marginTop: 5 }}>
            {item.name}
          </Text>
          <Text style={{ fontSize: 12, overflow: "scroll", fontWeight: "500", marginTop: 5 }}>
            ${item.price}
          </Text>
          <Text
            style={{
              fontSize: 12,
              overflow: "scroll",
              fontWeight: "500",
              backgroundColor: "gray",
              width: "40%",
              padding: 5,
              marginTop: 5
            }}
          >
            {item.isFeatured ? "Featured" : "Not Featured"}
          </Text>
          <Text style={{ fontSize: 12, overflow: "scroll", fontWeight: "500", width: "50%", marginTop: 5 }}>
            {item.description}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(p) => p.id.toString()}
        renderItem={renderitem}
      />
    </View>
  );
};
