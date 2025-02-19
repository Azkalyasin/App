import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import Splash from "./Splash";

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer); // Bersihkan timer saat unmount
  }, []);

  return showSplash ? <Splash /> : (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
