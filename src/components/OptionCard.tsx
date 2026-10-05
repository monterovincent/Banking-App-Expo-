import { Card } from "@/components/Card";
import { colors, fontSize, spacing } from "@/theme";
import type { IconName } from "@/types";
import { Ionicons } from "@expo/vector-icons";
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
  onPress?: () => void; // left out for items with no destination
};

export function OptionCard({
  title,
  subtitle,
  icon,
  image,
  onPress,
}: OptionCardProps) {
  return (
    <Pressable
      accessibilityRole={onPress ? "button" : undefined}
      disabled={!onPress}
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      <Card variant="outlined" style={styles.card}>
        {/* Slot height matches the title's line height, so the icon centers on the first line */}
        <View style={styles.leading}>
          {icon && <Ionicons name={icon} size={22} color={colors.primary} />}
          {image && (
            <Image source={image} style={styles.image} resizeMode="contain" />
          )}
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: "row", alignItems: "flex-start", gap: spacing.md },
  pressed: { opacity: 0.7 },
  leading: {
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
