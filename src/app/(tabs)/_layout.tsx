import { colors } from "@/theme";
import type { IconName } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import type { ColorValue } from "react-native";

// One place to build tab icons; milestone for the app
const tabIcon =
  (name: IconName) =>
  ({ color, size }: { color: ColorValue; size: number }) => (
    <Ionicons name={name} size={size} color={color} />
  );

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: { backgroundColor: colors.background, borderTopWidth: 0 },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{ title: "Home", tabBarIcon: tabIcon("home-outline") }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          title: "Transfer",
          tabBarIcon: tabIcon("paper-plane-outline"),
        }}
      />
      <Tabs.Screen
        name="airtime"
        options={{
          title: "Airtime & Data",
          tabBarIcon: tabIcon("phone-portrait-outline"),
        }}
      />
      <Tabs.Screen
        name="bills"
        options={{ title: "Bills", tabBarIcon: tabIcon("cube-outline") }}
      />
      <Tabs.Screen
        name="menu"
        options={{ title: "Menu", tabBarIcon: tabIcon("menu") }}
      />
    </Tabs>
  );
}
