import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Greet } from "../components1/Greet";
import { ComponentA } from "../components1/ComponentA";
import { Name } from "../component2/Name";
import { Age } from "../component2/Age";
import { Twitter } from "../component2/Twitter";
import { Button1 } from "../components3/Button1";
import { ImageCompo } from "../components3/ImageCompo";
import { Challenge } from "../components3/Challenge";
import { ExpressionJS } from "../components4/ExpressionJS";
import { InlineStyle } from "../components5style/InlineStyle";
import { StyleSheet1 } from "../components5style/StyleSheet ";
import { FlatList1 } from "../componentsFlatList6/FlatList1";
import { ArrayOfObject } from "../componentsFlatList6/ArrayOfObect";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChallengeFlatList } from "../componentsFlatList6/ChallengeFlatList";
import { Parent } from "../componentsProps7/Parent";
import { ChallengeParent } from "../componentsProps7/ChallengeParent";
import { State } from "../componentsState8/State";
import { Toggle } from "../componentsState8/ChallengeToggle1";
import { Weather } from "../componentsState8/ChallengeWeather";
import { ColorChange } from "../componentsState8/ChallengeColor";
import { Todo } from "../componentsState8/ChallengeTodo";
import { Useeffect } from "../componentsUseEffect9/Useeffect";
import { userProvider } from "../context/useContext";
import { ContextApi } from "../componentsContext10/ContextApi";
import "../../global.css";
import { Link } from "expo-router";

const Index = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-red-500 margin-top-10">
      {/* <ScrollView>
        <Text>Hello there Farooq world</Text>
        <Greet />
        <ComponentA />
        <Name />
        <Age />
        <Twitter />
        <Button1 />
        <ImageCompo />
        <Challenge />
        <ExpressionJS />
        <InlineStyle />
        <StyleSheet1 />
        <FlatList1 />
        <ArrayOfObject /> */}
      {/* <ChallengeFlatList /> */}
      {/* </ScrollView> */}
      {/* <ChallengeParent /> */}
      {/* <State /> */}
      {/* <Toggle /> */}
      {/* <Weather /> */}
      {/* <ColorChange /> */}
      {/* <Todo /> */}
      <Link href={"../expoRouter/Explore" as any}>Go to Explore</Link>
      <Link href={"../expoRouter/About" as any}>Go to About</Link>
      <Link href={"../expoRouter/Home" as any}>Go to Home</Link>
      <Text className="text-xl font-bold text-blue-500">
        <Useeffect />
      </Text>

      {/* <userProvider>
        <ContextApi />
      </userProvider> */}
    </SafeAreaView>
  );
};

export default Index;
