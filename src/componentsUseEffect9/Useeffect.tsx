import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { useFetch } from "../hooks/useFetch";

interface Meals {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export const Useeffect = () => {
  // const [data, setData] = useState<Meals[]>([]);
  const [loading, setLoading] = useState(false);

  const [data1] = useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await fetch(
  //         "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  //       );
  //       const data = await res.json();
  //       setData(data.meals);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <FlatList<Meals>
        data={data1}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              marginTop: 6,
              padding: 6,
              backgroundColor: "#988f8fff",
            }}
          >
            <Image
              source={{ uri: item.strMealThumb }}
              style={{ width: 100, height: 100 }}
            />
            <Text style={{ width: "60%", margin: "auto" }}>{item.strMeal}</Text>
          </View>
        )}
        style={{ padding: 6 }}
      />
    </View>
  );
};
