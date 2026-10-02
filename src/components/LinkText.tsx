import { colors, fontSize } from "@/theme";
import { StyleSheet, Text } from "react-native";

type LinkTextProps = {
  label: string;
  onPress: () => void;
};

// Built on Text, not Pressable, so it also works inline inside a sentence:
// <Text>Not Ebube, <LinkText ... /></Text>
export function LinkText({ label, onPress }: LinkTextProps) {
  return (
    <Text accessibilityRole="link" onPress={onPress} style={styles.link}>
      {label}
    </Text>
  );
}

const styles = StyleSheet.create({
  link: { color: colors.primary, fontSize: fontSize.body, fontWeight: "600" },
});
