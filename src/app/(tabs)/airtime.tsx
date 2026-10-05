import { OptionCard } from "@/components/OptionCard";
import { ScreenHeader } from "@/components/ScreenHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { purchaseOptions } from "@/data/purchaseOptions";
import { spacing } from "@/theme";
import { StyleSheet, View } from "react-native";

export default function AirtimeScreen() {
  return (
    <View style={styles.root}>
      <ScreenHeader
        title="Airtime and Data"
        subtitle="Choose which category to buy"
      />

      {/* Plain View, not ScrollView: two cards fit on any phone, so nothing here needs to scroll */}
      <View style={styles.content}>
        <SectionHeader title="New Purchase" />
        <View style={styles.options}>
          {/* id becomes the key; the rest (title, subtitle, icon) are OptionCard's props */}
          {purchaseOptions.map(({ id, ...option }) => (
            <OptionCard key={id} {...option} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxl + spacing.xs, // 36 points, measured from the reference (Transfer uses 20)
    gap: spacing.lg,
  },
  options: { gap: spacing.xl },
});
