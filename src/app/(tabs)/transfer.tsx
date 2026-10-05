import { Avatar } from "@/components/Avatar";
import { LinkText } from "@/components/LinkText";
import { OptionCard } from "@/components/OptionCard";
import { ScreenHeader } from "@/components/ScreenHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { beneficiaries, type Beneficiary } from "@/data/beneficiaries";
import { transferOptions } from "@/data/transferOptions";
import { colors, fontSize, spacing } from "@/theme";
import { ScrollView, StyleSheet, Text, View } from "react-native";

// Only used on this screen and small, so it stays in this file
function BeneficiaryItem({ name }: Pick<Beneficiary, "name">) {
  return (
    <View style={styles.beneficiary}>
      <Avatar name={name} />
      {/* One line only: long names end in "..." like the reference */}
      <Text numberOfLines={1} style={styles.beneficiaryName}>
        {name.toUpperCase()}
      </Text>
    </View>
  );
}

export default function TransferScreen() {
  return (
    <View style={styles.root}>
      {/* Outside the ScrollView, so the title bar stays put while the content scrolls */}
      <ScreenHeader
        title="Transfer Money"
        subtitle="Choose where you want to transfer money"
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.beneficiaries}>
          <SectionHeader
            title="Saved Beneficiaries"
            // The full list screen is out of scope, so the link does nothing
            right={<LinkText label="See All" onPress={() => {}} />}
          />
          {/* Horizontal, so a sixth beneficiary scrolls sideways instead of breaking the row */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.beneficiaryRow}
          >
            {beneficiaries.map(({ id, name }) => (
              <BeneficiaryItem key={id} name={name} />
            ))}
          </ScrollView>
        </View>

        <View style={styles.newTransfer}>
          <SectionHeader title="New Transfer" />
          <View style={styles.options}>
            {/* id becomes the key; the rest (title, subtitle, icon, image) are OptionCard's props */}
            {transferOptions.map(({ id, ...option }) => (
              <OptionCard key={id} {...option} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg + spacing.xs, // 20 points, measured from the reference
    paddingBottom: spacing.xl,
    gap: spacing.xl,
  },
  beneficiaries: { gap: spacing.md },
  beneficiaryRow: { gap: spacing.lg },
  beneficiary: { width: 48, alignItems: "center", gap: spacing.md }, // same width as the avatar, so labels truncate at its edge
  beneficiaryName: {
    color: colors.white,
    fontSize: fontSize.caption,
    textAlign: "center",
  },
  newTransfer: { gap: spacing.lg },
  options: { gap: spacing.xl },
});
