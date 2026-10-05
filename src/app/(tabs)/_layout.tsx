import { colors, fontSize } from "@/theme";
import type { IconName } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import type { ColorValue } from "react-native";

// Outlined when idle, filled when selected; the navigator passes `focused`
const tabIcon =
  (outline: IconName, filled: IconName) =>
  ({
    color,
    size,
    focused,
  }: {
    color: ColorValue;
    size: number;
    focused: boolean;
  }) => (
    <Ionicons name={focused ? filled : outline} size={size} color={color} />
  );

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: colors.background },
        tabBarItemStyle: { paddingHorizontal: 0 },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        // Flat bar, same color as the page, no border or shadow
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: { fontSize: fontSize.small, fontWeight: "600" },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{ title: "Home", tabBarIcon: tabIcon("home-outline", "home") }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          title: "Transfer",
          tabBarIcon: tabIcon("paper-plane-outline", "paper-plane"),
        }}
      />
      <Tabs.Screen
        name="airtime"
        options={{
          title: "Airtime & Data",
          tabBarIcon: tabIcon("phone-portrait-outline", "phone-portrait"),
        }}
      />
      <Tabs.Screen
        name="bills"
        options={{
          title: "Bills",
          tabBarIcon: tabIcon("cube-outline", "cube"),
        }}
      />
      {/* Ionicons has no filled hamburger, so Menu uses the same icon and only the color changes */}
      <Tabs.Screen
        name="menu"
        options={{ title: "Menu", tabBarIcon: tabIcon("menu", "menu") }}
      />
    </Tabs>
  );
}
