import { View, Text } from "react-native";
import React from "react";
import UserIntro from "../../components/Profile/UserIntro";
import MenuList from "../../components/Profile/MenuList";

export default function Profile() {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
        }}
      >
        Profile
      </Text>

      {/* User Intro  */}
      <UserIntro />

      {/* Menu List  */}
      <MenuList />
    </View>
  );
}
