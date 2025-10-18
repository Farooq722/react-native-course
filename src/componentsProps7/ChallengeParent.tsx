import { View } from "react-native";
import { ChallengeChild } from "./ChallengeChild";

export const ChallengeParent = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWWMCHK_gJ_A5utJVN_UwvVRsI5GVmk096g&s",
      price: 1999,
      description:
        "High-quality wireless headphones with deep bass and noise isolation.",
      isFeatured: true,
    },
    {
      id: 2,
      name: "Smart Watch",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWWMCHK_gJ_A5utJVN_UwvVRsI5GVmk096g&s",
      price: 3499,
      description:
        "Track your fitness, heart rate, and notifications on the go.",
      isFeatured: false,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWWMCHK_gJ_A5utJVN_UwvVRsI5GVmk096g&s",
      price: 2499,
      description: "Compact speaker with rich sound and long battery life.",
      isFeatured: true,
    },
    {
      id: 4,
      name: "Gaming Mouse",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWWMCHK_gJ_A5utJVN_UwvVRsI5GVmk096g&s",
      price: 1599,
      description:
        "Ergonomic gaming mouse with RGB lighting and precision tracking.",
      isFeatured: false,
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWWMCHK_gJ_A5utJVN_UwvVRsI5GVmk096g&s",
      price: 2899,
      description:
        "Durable mechanical keyboard with tactile switches and LED backlight.",
      isFeatured: true,
    },
    {
      id: 6,
      name: "Laptop Stand",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWWMCHK_gJ_A5utJVN_UwvVRsI5GVmk096g&s",
      price: 899,
      description: "Adjustable aluminum stand for laptops and tablets.",
      isFeatured: false,
    },
    {
      id: 7,
      name: "Portable Charger",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWWMCHK_gJ_A5utJVN_UwvVRsI5GVmk096g&s",
      price: 1399,
      description: "10000mAh fast-charging power bank with dual USB ports.",
      isFeatured: false,
    },
    {
      id: 8,
      name: "Noise Cancelling Earbuds",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWWMCHK_gJ_A5utJVN_UwvVRsI5GVmk096g&s",
      price: 2999,
      description:
        "Wireless earbuds with active noise cancellation and 24-hour battery life.",
      isFeatured: true,
    },
    {
      id: 9,
      name: "4K Action Camera",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWWMCHK_gJ_A5utJVN_UwvVRsI5GVmk096g&s",
      price: 4999,
      description:
        "Capture your adventures in stunning 4K resolution with image stabilization.",
      isFeatured: false,
    },
    {
      id: 10,
      name: "Smart LED Lamp",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWWMCHK_gJ_A5utJVN_UwvVRsI5GVmk096g&s",
      price: 1799,
      description:
        "Touch-controlled smart lamp with color changing and dimming features.",
      isFeatured: true,
    },
  ];

  return (
    <View>
      <ChallengeChild products={products} />
    </View>
  );
};
