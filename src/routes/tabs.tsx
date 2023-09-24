import { Tabs, Redirect } from "expo-router";
// icons
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Image } from "expo-image";

export default function TabsRouter() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="index"
      backBehavior="order"
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="rule"
        options={{
          headerShown: false,
          title: "Rules",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assets/icons/rule.png")}
              style={{ width: 22, height: 22 }}
              tintColor={color}
            />
          ),
          freezeOnBlur: true,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          headerShown: false,
          title: "Messages",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
