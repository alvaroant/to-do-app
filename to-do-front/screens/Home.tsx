import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { ScreenList } from "../types/screenList";

export default function Home({
  route,
  navigation,
}: NativeStackScreenProps<ScreenList, "Home">) {
  const { name } = route.params;

  return (
    <View>
      <Text>Hola {name}</Text>
    </View>
  );
}
