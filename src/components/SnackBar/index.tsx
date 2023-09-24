import { useEffect, useState } from "react";
import { Snackbar as SnackbarPaper } from "react-native-paper";

interface Props {
  message: string;
  setMessage: (message: string) => void;
  duration?: number;
}

const Snackbar = ({ message, setMessage, duration }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  duration = duration ? duration : 3000;

  useEffect(() => {
    if (message) {
      setIsVisible(true);
    }
  }, [message]);

  const onDismissSnackBar = () => {
    setIsVisible(false);
    setMessage("");
  };

  return (
    <SnackbarPaper
      visible={isVisible}
      onDismiss={onDismissSnackBar}
      duration={duration}
      action={{
        label: "Kapat",
        onPress: () => setIsVisible(false),
      }}
    >
      {message}
    </SnackbarPaper>
  );
};

export default Snackbar;
