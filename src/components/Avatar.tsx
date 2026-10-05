import { colors, fontSize } from "@/theme";
import { getInitials } from "@/utils/getInitials";
import { StyleSheet, Text, View } from "react-native";

type AvatarProps = {
  name: string;
  size?: number; // diameter in points; defaults to the size measured from the reference
};

export function Avatar({ name, size = 48 }: AvatarProps) {
  return (
    <View
      style={[
        styles.circle,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <Text style={styles.initials}>{getInitials(name)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  initials: { color: colors.white, fontSize: fontSize.body, fontWeight: "700" },
});
