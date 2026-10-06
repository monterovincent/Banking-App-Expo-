import { Avatar } from "@/components/Avatar";
import { OptionCard } from "@/components/OptionCard";
import { ScreenHeader } from "@/components/ScreenHeader";
import { SectionHeader } from "@/components/SectionHeader";
import {
  billCategories,
  billSources,
  type BillSource,
} from "@/data/billCategories";
import { colors, fontSize, radius, spacing } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

// Only used on this screen and small, so it stays in this file
function SourcePill({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: active }} // screen readers announce which pill is selected
      onPress={onPress}
      style={[styles.pill, active ? styles.pillActive : styles.pillIdle]}
    >
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit // shrinks the text slightly instead of cutting it off with "..."
        minimumFontScale={0.85}
        style={[
          styles.pillLabel,
          active ? styles.pillLabelActive : styles.pillLabelIdle,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export default function BillsScreen() {
  // Which list is showing; only ever "zenith" or "quickteller"
  const [source, setSource] = useState<BillSource>("zenith");

  return (
    <View style={styles.root}>
      <ScreenHeader
        title="Pay Bills"
        subtitle="Choose the bill category for payment"
      />

      {/* Outside the list, so the pills and heading stay put while the cards scroll */}
      <View style={styles.controls}>
        <View style={styles.pills}>
          {billSources.map(({ id, label }) => (
            <SourcePill
              key={id}
              label={label}
              active={id === source}
              onPress={() => setSource(id)}
            />
          ))}
        </View>
        <SectionHeader
          title="Bill Categories"
          // Decorative for now; filtering the list is a stretch goal
          right={
            <Ionicons
              name="search-outline"
              size={22}
              color={colors.white}
              style={styles.searchIcon}
            />
          }
        />
      </View>

      <FlatList
        key={source} // a new key remounts the list, so switching pills starts at the top
        data={billCategories[source]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <OptionCard
            title={item.title}
            subtitle={item.subtitle}
            leading={<Avatar name={item.title} />}
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  controls: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    gap: spacing.xxl,
  },
  pills: { flexDirection: "row", gap: spacing.sm },
  pill: {
    flex: 1, // two equal halves
    minHeight: 44,
    borderWidth: 1,
    borderRadius: radius.pill,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.xs,
  },
  pillActive: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.primary,
  },
  pillIdle: { borderColor: colors.border },
  pillLabel: { fontSize: fontSize.body, fontWeight: "600" },
  pillLabelActive: { color: colors.primary },
  pillLabelIdle: { color: colors.textMuted },
  searchIcon: { marginRight: spacing.lg }, // the reference insets the icon from the edge
  list: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
    gap: spacing.xl,
  },
});
