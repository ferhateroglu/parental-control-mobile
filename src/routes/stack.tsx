// routes.js
import React from "react";
import { Stack } from "expo-router";

const MainStack = () => (
  <Stack>
    <Stack.Screen
      name="login"
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="register"
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="(tabs)"
      options={{
        headerShown: false,
      }}
    />
  </Stack>
);

export default MainStack;
