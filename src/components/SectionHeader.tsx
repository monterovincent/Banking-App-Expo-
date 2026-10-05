import { colors, fontSize } from "@/theme";
import type { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

type SectionHeaderProps = {
  title: string;
  right?: ReactNode; // e.g. a LinkText or an icon; nothing when omitted
};

export function SectionHeader({ title, right }: SectionHeaderProps) {
  return (
    <View style={styles.row}>
      <Text accessibilityRole="header" style={styles.title}>
        {title}
      </Text>
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontSize: fontSize.subtitle,
    fontWeight: "700",
  },
});
