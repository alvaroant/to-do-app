import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Button } from "react-native";
import { ScreenList } from "../types/screenList";

export default function Login({
  navigation,
}: NativeStackScreenProps<ScreenList, "Login">) {
  return (
    <View>
      <Button
        title="Home"
        onPress={() => navigation.navigate("Home", { name: "Alvaro" })}
      />
    </View>
  );
}
