import { colors, fontSize, radius, spacing } from "@/theme";
import { Pressable, StyleSheet, Text, View } from "react-native";

type PlaceholderProps = {
  title: string;
  actionLabel?: string;
  onAction?: () => void;
};

// Temporary scaffold. Delete once every screen is built
export function Placeholder({
  title,
  actionLabel,
  onAction,
}: PlaceholderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {actionLabel && onAction && (
        <Pressable style={styles.button} onPress={onAction}>
          <Text style={styles.buttonText}>{actionLabel}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.lg,
  },
  title: { color: colors.white, fontSize: fontSize.title, fontWeight: "700" },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.sm,
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.subtitle,
    fontWeight: "600",
  },
});
