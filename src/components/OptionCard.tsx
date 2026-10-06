import { Card } from "@/components/Card";
import { colors, fontSize, spacing } from "@/theme";
import type { IconName } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import type { ReactNode } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
} from "react-native";

type OptionCardProps = {
  title: string;
  subtitle: string;
  icon?: IconName; // generic items use an Ionicon
  image?: ImageSourcePropType; // brand items use an image file
  leading?: ReactNode; // custom element (e.g. an Avatar); replaces the icon/image slot
  onPress?: () => void; // left out for items with no destination
};

export function OptionCard({
  title,
  subtitle,
  icon,
  image,
  leading,
  onPress,
}: OptionCardProps) {
  return (
    <Pressable
      accessibilityRole={onPress ? "button" : undefined}
      disabled={!onPress}
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      {/* Icons line up with the title's first line; a custom leading element centers on the card */}
      <Card
        variant="outlined"
        style={[styles.card, leading ? styles.centered : styles.top]}
      >
        {/* ?? means "use leading if there is one, otherwise draw the icon slot" */}
        {leading ?? (
          // Slot height matches the title's line height, so the icon centers on the first line
          <View style={styles.iconSlot}>
            {icon && <Ionicons name={icon} size={22} color={colors.primary} />}
            {image && (
              <Image source={image} style={styles.image} resizeMode="contain" />
            )}
          </View>
        )}
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: "row", gap: spacing.md },
  top: { alignItems: "flex-start" },
  // Avatar cards use 12 top and bottom (measured), which gives the reference's ~74-point card height
  centered: { alignItems: "center", paddingVertical: spacing.md },
  pressed: { opacity: 0.7 },
  iconSlot: {
    width: 24,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: 24, height: 20 }, // contain fits the image inside this box without stretching
  text: { flex: 1, gap: spacing.xs },
  title: {
    color: colors.white,
    fontSize: fontSize.subtitle,
    fontWeight: "500",
    lineHeight: 20,
  },
  subtitle: { color: colors.textMuted, fontSize: fontSize.caption },
});
