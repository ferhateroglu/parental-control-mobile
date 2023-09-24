import { useEffect, useState } from "react";
import { Linking } from "react-native";

import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";

// components
import Snackbar from "../../components/SnackBar";

const index = () => {
  const [message, setMessage] = useState("");
  const handlePress = () => {
    checkBackgorundLocationPermission();
  };

  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);

  const checkBackgorundLocationPermission = async () => {
    let { status } = await Location.requestBackgroundPermissionsAsync();

    if (status !== "granted") {
      setMessage("izin vermedi");
    }
  };

  //

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log("status", status);
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location: any = await Location.getCurrentPositionAsync({});
      console.log("location", location);
      setLocation(location);
    })();
  }, []);

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Snackbar message={message} setMessage={setMessage} />
      <Button
        className="rounded-md mx-5 "
        mode="contained"
        onPress={handlePress}
      >
        permission check
      </Button>
      {/** linking permissions */}

      <Button
        className="rounded-md mx-5 "
        mode="outlined"
        onPress={() => {
          Linking.openSettings();
        }}
      >
        link permission
      </Button>
    </SafeAreaView>
  );
};

export default index;
