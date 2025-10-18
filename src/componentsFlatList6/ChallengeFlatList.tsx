import { FlatList, Image, Text, View } from "react-native";

interface Product {
  name: string;
  image: string;
  price: number;
  rating: number;
}

export const ChallengeFlatList = () => {
  const products = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWWMCHK_gJ_A5utJVN_UwvVRsI5GVmk096g&s",
      name: "Wireless Headphones",
      rating: 4.5,
      price: 1999,
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWWMCHK_gJ_A5utJVN_UwvVRsI5GVmk096g&s",
      name: "Smart Watch",
      rating: 4.2,
      price: 3499,
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWWMCHK_gJ_A5utJVN_UwvVRsI5GVmk096g&s",
      name: "Bluetooth Speaker",
      rating: 4.7,
      price: 2499,
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWWMCHK_gJ_A5utJVN_UwvVRsI5GVmk096g&s",
      name: "Gaming Mouse",
      rating: 4.3,
      price: 1599,
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWWMCHK_gJ_A5utJVN_UwvVRsI5GVmk096g&s",
      name: "Noise Cancelling Headphones",
      rating: 4.8,
      price: 4999,
    },
    {
      id: 6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWWMCHK_gJ_A5utJVN_UwvVRsI5GVmk096g&s",
      name: "Mechanical Keyboard",
      rating: 4.6,
      price: 2899,
    },
    {
      id: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWWMCHK_gJ_A5utJVN_UwvVRsI5GVmk096g&s",
      name: "Laptop Stand",
      rating: 4.1,
      price: 899,
    },
    {
      id: 8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWWMCHK_gJ_A5utJVN_UwvVRsI5GVmk096g&s",
      name: "Portable Charger",
      rating: 4.4,
      price: 1399,
    },
  ];

  const renderitem = ({ item }: { item: Product }) => {
    return (
      <View
        style={{
          backgroundColor: "black",
          padding: 10,
          margin: 4,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{
            width: 200,
            height: 200,
            padding: 5,
            margin: 4,
            objectFit: "fill",
            borderRadius: 50,
          }}
        />
        <Text style={{ color: "white" }}>Name: {item.name}</Text>
        <Text style={{ color: "white" }}>Price: ${item.price}</Text>
        <Text style={{ color: "white" }}>Rating: {item.rating}⭐</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(product) => product.id.toString()}
        renderItem={renderitem}
      />
    </View>
  );
};
