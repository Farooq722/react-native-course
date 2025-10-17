import { FlatList, Text, View } from "react-native";

export const ArrayOfObject = () => {
  const cities = [
    { id: "1", name: "New York" },
    { id: "2", name: "Tokyo" },
    { id: "3", name: "London" },
    { id: "4", name: "Paris" },
    { id: "5", name: "Dubai" },
    { id: "6", name: "Singapore" },
    { id: "7", name: "Los Angeles" },
    { id: "8", name: "Sydney" },
    { id: "9", name: "Toronto" },
    { id: "10", name: "Hong Kong" },
    { id: "11", name: "Barcelona" },
    { id: "12", name: "Berlin" },
    { id: "13", name: "Rome" },
    { id: "14", name: "Istanbul" },
    { id: "15", name: "Seoul" },
    { id: "16", name: "Bangkok" },
    { id: "17", name: "San Francisco" },
    { id: "18", name: "Chicago" },
    { id: "19", name: "Amsterdam" },
    { id: "20", name: "Madrid" },
    { id: "21", name: "Lisbon" },
    { id: "22", name: "Mexico City" },
    { id: "23", name: "Kuala Lumpur" },
    { id: "24", name: "Mumbai" },
    { id: "25", name: "Delhi" },
    { id: "26", name: "Shanghai" },
    { id: "27", name: "Beijing" },
    { id: "28", name: "Melbourne" },
    { id: "29", name: "Copenhagen" },
    { id: "30", name: "Stockholm" },
    { id: "31", name: "Helsinki" },
    { id: "32", name: "Cape Town" },
    { id: "33", name: "Johannesburg" },
    { id: "34", name: "Buenos Aires" },
    { id: "35", name: "Santiago" },
    { id: "36", name: "Lagos" },
    { id: "37", name: "Nairobi" },
    { id: "38", name: "Casablanca" },
    { id: "39", name: "Doha" },
    { id: "40", name: "Abu Dhabi" },
    { id: "41", name: "Jakarta" },
    { id: "42", name: "Hanoi" },
    { id: "43", name: "Manila" },
    { id: "44", name: "Karachi" },
    { id: "45", name: "Riyadh" },
    { id: "46", name: "Tehran" },
    { id: "47", name: "Vancouver" },
    { id: "48", name: "Montreal" },
    { id: "49", name: "Boston" },
    { id: "50", name: "Seattle" },
  ];

  return (
    <View>
      <Text>Array of objects</Text>
      <FlatList
        data={cities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};
