import { colors, fontSize, radius, spacing } from "@/theme";
import type { ReactNode } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    type TextInputProps,
} from "react-native";

type TextFieldProps = TextInputProps & {
  label: string;
  labelAction?: ReactNode; // right end of the label row, e.g. a link
};

export function TextField({
  label,
  labelAction,
  ...inputProps
}: TextFieldProps) {
  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>{label}</Text>
        {labelAction}
      </View>
      <TextInput
        // Spread first so our own props below win: keeps every field consistent
        {...inputProps}
        accessibilityLabel={label}
        placeholderTextColor={colors.textPlaceholder}
        selectionColor={colors.primary} // cursor and text highlight
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: spacing.sm },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    color: colors.white,
    fontSize: fontSize.subtitle,
    fontWeight: "500",
  },
  input: {
    minHeight: 54,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.lg,
    color: colors.white,
    fontSize: fontSize.subtitle,
  },
});
