import { colors, fontSize, radius } from "@/theme";
import { Pressable, StyleSheet, Text } from "react-native";

type AppButtonProps = {
  label: string;
  onPress: () => void;
  variant?: "primary" | "outline" | "light"; // optional; defaults to primary
  disabled?: boolean; // a state, not a look: any variant can be disabled
};

export function AppButton({
  label,
  onPress,
  variant = "primary",
  disabled = false,
}: AppButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }} // screen readers announce it as dimmed
      disabled={disabled} // Pressable ignores taps while true
      onPress={onPress}
      // Style array: later entries win, so disabled overrides the variant color
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        disabled && styles.disabled,
        pressed && styles.pressed,
      ]}
    >
      <Text
        style={[
          styles.label,
          variant === "light" && styles.labelDark,
          disabled && styles.labelDisabled,
        ]}
      >
        {label}
      </Text>
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
  // Variant keys must match the `variant` values: styles[variant] looks them up by name
  primary: { backgroundColor: colors.primary },
  outline: { borderWidth: 1, borderColor: colors.white },
  light: { backgroundColor: colors.offWhite },
  disabled: { backgroundColor: colors.disabled, borderColor: colors.disabled },
  pressed: { opacity: 0.8 },
  label: {
    color: colors.white,
    fontSize: fontSize.subtitle,
    fontWeight: "600",
  },
  labelDark: { color: colors.background }, // white button needs dark text
  labelDisabled: { color: colors.textMuted },
});
