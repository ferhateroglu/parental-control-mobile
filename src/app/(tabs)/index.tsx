import { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// components
import Snackbar from "../../components/SnackBar";
import MiniMap from "../../components/MiniMap";

const index = () => {
  return (
    <SafeAreaView className="flex-1 items-center p-2">
      <MiniMap />
    </SafeAreaView>
  );
};

export default index;
