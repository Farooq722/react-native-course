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

const Index = () => {
  return (
    <SafeAreaView>
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
      <State />
    </SafeAreaView>
  );
};

export default Index;
