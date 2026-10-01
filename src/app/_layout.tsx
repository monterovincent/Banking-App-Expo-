import { colors } from "@/theme";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false, // screens draw their own headers to match the reference
          contentStyle: { backgroundColor: colors.background },
        }}
      />
    </>
  );
}
