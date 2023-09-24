import { PaperProvider } from "react-native-paper";
// icons expo vector icons
import AwesomeIcon from "react-native-vector-icons/FontAwesome";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClientProvider } from "react-query";

import MainStack from "../routes/stack";
import { queryClient } from "../utils/queryClient";

export default function Root() {
  console.log("1");
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <MainStack />
        </PaperProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
