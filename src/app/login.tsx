import { Link, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

export default function Login() {
  console.log("2");
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="">
        <Link href="/(tabs)">Navigate to home</Link>
      </Text>
      <Text>
        <Link href="/register">Navigate to register</Link>
      </Text>
    </SafeAreaView>
  );
}
