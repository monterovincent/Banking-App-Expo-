import { colors, fontSize, spacing } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import type { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
  right?: ReactNode; // slot for the right end, e.g. the bell on Home
  variant?: "titled" | "greeting"; // optional; defaults to titled
};

export function ScreenHeader({
  title,
  subtitle,
  right,
  variant = "titled",
}: ScreenHeaderProps) {
  const insets = useSafeAreaInsets(); // header sits under the status bar, so pad for it

  return (
    <View
      style={[
        styles.container,
        styles[variant],
        { paddingTop: insets.top + spacing.sm },
      ]}
    >
      <View style={styles.avatar}>
        <Ionicons name="person-outline" size={18} color={colors.primary} />
      </View>
      <View style={styles.text}>
        <Text
          style={[styles.title, variant === "greeting" && styles.greetingTitle]}
          numberOfLines={1}
        >
          {title}
        </Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    paddingBottom: spacing.lg,
  },
  // Variant keys must match the `variant` values
  titled: {
    backgroundColor: colors.headerBackground,
    paddingHorizontal: spacing.lg,
  },
  greeting: { paddingHorizontal: spacing.xl }, // no background: Home's backdrop shows through
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.textMuted,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { flex: 1 }, // takes the leftover width, which pushes `right` to the far end
  title: { color: colors.white, fontSize: fontSize.title, fontWeight: "700" },
  greetingTitle: { fontSize: fontSize.subtitle, fontWeight: "600" }, // overrides the title size
  subtitle: { color: colors.offWhite, fontSize: fontSize.body },
});
