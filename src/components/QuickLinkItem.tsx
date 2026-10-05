import type { QuickLink } from "@/data/quickLinks";
import { colors, fontSize, radius, spacing } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

// Props come from the data type, so the two can't drift apart
type QuickLinkItemProps = Pick<
  QuickLink,
  "label" | "icon" | "image" | "imageBadge"
> & {
  onPress?: () => void; // left out for items with no destination
};

export function QuickLinkItem({
  label,
  icon,
  image,
  imageBadge,
  onPress,
}: QuickLinkItemProps) {
  const logo = image && (
    <Image source={image} style={styles.image} resizeMode="contain" />
  );

  return (
    <Pressable
      accessibilityRole={onPress ? "button" : undefined}
      disabled={!onPress}
      onPress={onPress}
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
    >
      <View style={styles.tile}>
        {icon && <Ionicons name={icon} size={24} color={colors.primary} />}
        {/* Logos made for light backgrounds get a white square so they stay readable on the dark tile */}
        {imageBadge ? <View style={styles.badge}>{logo}</View> : logo}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: { width: "25%", alignItems: "center", gap: spacing.sm }, // four per row
  pressed: { opacity: 0.7 },
  tile: {
    width: 56, // measured from the reference
    height: 56,
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    width: 40, // measured from the reference
    height: 40,
    borderRadius: radius.md,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: 28, height: 28 }, // contain fits the image inside this box without stretching
  label: {
    color: colors.white,
    fontSize: fontSize.caption,
    textAlign: "center",
  },
});
