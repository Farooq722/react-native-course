import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export const Weather = () => {
  const [weather, setWeather] = useState("");
  const weatherData = [
    {
      id: 1,
      city: "Mumbai",
      temperature: 32,
      condition: "Sunny",
      humidity: 68,
      windSpeed: 12,
      isSunny: true,
    },
    {
      id: 2,
      city: "Delhi",
      temperature: 28,
      condition: "Haze",
      humidity: 55,
      windSpeed: 14,
      isSunny: false,
    },
    {
      id: 3,
      city: "Bangalore",
      temperature: 24,
      condition: "Cloudy",
      humidity: 72,
      windSpeed: 9,
      isSunny: false,
    },
    {
      id: 4,
      city: "Chennai",
      temperature: 30,
      condition: "Partly Cloudy",
      humidity: 74,
      windSpeed: 11,
      isSunny: true,
    },
    {
      id: 5,
      city: "Kolkata",
      temperature: 29,
      condition: "Rainy",
      humidity: 85,
      windSpeed: 16,
      isSunny: false,
    },
  ];

  const data = weather
    ? weatherData.find(
        (item) => item.city.toLowerCase() === weather.trim().toLowerCase()
      )
    : undefined;

  return (
    <View>
      <View>
        <TextInput
          placeholder="Enter City Name"
          defaultValue={weather}
          onChangeText={(text) => setWeather(text)}
          style={{
            height: 40,
            padding: 5,
            marginHorizontal: 8,
            borderWidth: 1,
          }}
        />
      </View>
      <View>
        <Text>
          {data
            ? `${data.city}: ${data.temperature}°C,`
            : weather
            ? "No data found for this city"
            : "Enter a city to see weather"}
        </Text>
      </View>
    </View>
  );
};
