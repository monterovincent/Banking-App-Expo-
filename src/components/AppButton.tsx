import { colors, fontSize, radius } from "@/theme";
import { Pressable, StyleSheet, Text } from "react-native";

type AppButtonProps = {
  label: string;
  onPress: () => void;
  variant?: "primary" | "outline"; // optional; defaults to primary
};

export function AppButton({
  label,
  onPress,
  variant = "primary",
}: AppButtonProps) {
  return (
    <Pressable
      accessibilityRole="button" // screen readers announce it as a button
      onPress={onPress}
      // Style array: later entries win. `pressed && styles.pressed` adds
      // nothing when false, so the dim only applies while a finger is down.
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  // Shared by every variant
  base: {
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.sm,
  },
  // Variant keys must match the `variant` prop values: styles[variant] looks them up by name
  primary: { backgroundColor: colors.primary },
  outline: { borderWidth: 1, borderColor: colors.white },
  pressed: { opacity: 0.8 },
  label: {
    color: colors.white,
    fontSize: fontSize.subtitle,
    fontWeight: "600",
  },
});
