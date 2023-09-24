import { Redirect } from "expo-router";

import { useAuthStore } from "../store";

const Protection = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return <>{children}</>;
};

export default Protection;
