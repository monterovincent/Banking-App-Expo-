import { OptionCard } from "@/components/OptionCard";
import { ScreenHeader } from "@/components/ScreenHeader";
import { menuOptions } from "@/data/menuOptions";
import { colors, fontSize, radius, spacing } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

// Only used on this screen and small, so it stays in this file
function SearchBar({
  value,
  onChangeText,
}: {
  value: string;
  onChangeText: (text: string) => void;
}) {
  return (
    <View style={styles.search}>
      <Ionicons name="search-outline" size={22} color={colors.white} />
      <TextInput
        accessibilityLabel="Search menu"
        value={value}
        onChangeText={onChangeText}
        placeholder="Search menu"
        placeholderTextColor={colors.textPlaceholder}
        selectionColor={colors.primary} // cursor and text highlight
        returnKeyType="search"
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.searchInput}
      />
    </View>
  );
}

export default function MenuScreen() {
  const [query, setQuery] = useState("");

  // Calculated on every render, never stored, so it can't go out of date.
  // includes("") is always true, so an empty search shows everything with no special case.
  const needle = query.trim().toLowerCase();
  const results = menuOptions.filter(({ title, subtitle }) =>
    `${title} ${subtitle}`.toLowerCase().includes(needle),
  );

  return (
    <View style={styles.root}>
      <ScreenHeader
        title="Menu"
        subtitle="Do more on Zenith Bank mobile banking app"
      />

      {/* Outside the list, so the field is never rebuilt (and never loses focus) while you type */}
      <View style={styles.controls}>
        <Text style={styles.intro}>Choose what you want to do</Text>
        <SearchBar value={query} onChangeText={setQuery} />
      </View>

      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <OptionCard
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            image={item.image}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No results for "{query.trim()}"</Text>
        }
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
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
    paddingTop: spacing.lg + spacing.xs, // 20 points, same as Transfer
    gap: spacing.md,
  },
  intro: { color: colors.textMuted, fontSize: fontSize.body },
  search: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    minHeight: 50, // measured from the reference
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.md,
  },
  searchInput: {
    flex: 1,
    alignSelf: "stretch",
    color: colors.white,
    fontSize: fontSize.body,
  },
  list: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xl,
    gap: spacing.xl,
  },
  empty: {
    color: colors.textMuted,
    fontSize: fontSize.body,
    textAlign: "center",
    marginTop: spacing.xl,
  },
});
