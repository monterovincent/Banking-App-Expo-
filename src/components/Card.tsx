import { colors, radius, spacing } from "@/theme";
import type { ReactNode } from "react";
import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";

type CardProps = {
  children: ReactNode;
  variant?: "filled" | "outlined"; // optional; defaults to filled
  style?: StyleProp<ViewStyle>; // layout tweaks from the caller (row direction, margins)
};

export function Card({ children, variant = "filled", style }: CardProps) {
  // Caller's style goes last so it can override the defaults
  return <View style={[styles.base, styles[variant], style]}>{children}</View>;
}

const styles = StyleSheet.create({
  base: { padding: spacing.lg, borderRadius: radius.md },
  // Same color as the page on other screens; on Home it sits on the darker backdrop
  filled: { backgroundColor: colors.background },
  outlined: { borderWidth: 1, borderColor: colors.border },
});
