import { Card } from "@/components/Card";
import { LinkText } from "@/components/LinkText";
import { QuickLinkItem } from "@/components/QuickLinkItem";
import { ScreenHeader } from "@/components/ScreenHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { quickLinks } from "@/data/quickLinks";
import { user } from "@/data/user";
import { colors, fontSize, radius, spacing } from "@/theme";
import { formatBalance } from "@/utils/formatBalance";
import { getGreeting } from "@/utils/getGreeting";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

// Only used on Home and small, so it stays in this file
function EyeButton({
  visible,
  onToggle,
}: {
  visible: boolean;
  onToggle: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={visible ? "Hide balances" : "Show balances"}
      hitSlop={12}
      onPress={onToggle}
    >
      <Ionicons
        name={visible ? "eye-off-outline" : "eye-outline"}
        size={22}
        color={colors.white}
      />
    </Pressable>
  );
}

export default function HomeScreen() {
  const router = useRouter();
  // One flag drives every amount on the screen; hidden until an eye is tapped
  const [balancesVisible, setBalancesVisible] = useState(false);
  const toggleBalances = () => setBalancesVisible((visible) => !visible);

  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScreenHeader
          variant="greeting"
          title={`${getGreeting()}, ${user.firstName}`}
          // Decorative for now; notifications are out of scope
          right={
            <Ionicons
              name="notifications-outline"
              size={22}
              color={colors.white}
            />
          }
        />

        <View style={styles.cards}>
          {/* One account, so total balance equals the available balance */}
          <Card style={styles.balanceRow}>
            <Text style={styles.rowLabel}>Total balance</Text>
            <View style={styles.amountGroup}>
              <Text style={styles.rowAmount}>
                {formatBalance(user.availableBalance, balancesVisible)}
              </Text>
              <EyeButton visible={balancesVisible} onToggle={toggleBalances} />
            </View>
          </Card>

          <View>
            <Card style={styles.accountCard}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{user.accountStatus}</Text>
              </View>

              <View style={styles.identity}>
                <View style={styles.spaceBetween}>
                  <Text style={styles.accountLine}>
                    {user.accountNumber} - {user.accountType}
                  </Text>
                  {/* Static for now: copying would need a clipboard package */}
                  <Ionicons
                    name="copy-outline"
                    size={22}
                    color={colors.white}
                  />
                </View>
                <Text style={styles.holderName}>{user.fullName}</Text>
              </View>

              <View style={styles.available}>
                <Text style={styles.smallLabel}>Available Balance</Text>
                <View style={styles.spaceBetween}>
                  <Text style={styles.bigAmount}>
                    {formatBalance(user.availableBalance, balancesVisible)}
                  </Text>
                  <EyeButton
                    visible={balancesVisible}
                    onToggle={toggleBalances}
                  />
                </View>
              </View>
            </Card>

            <View style={styles.ledgerStrip}>
              <Text style={styles.smallLabel}>
                Ledger balance:{" "}
                {formatBalance(user.ledgerBalance, balancesVisible)}
              </Text>
            </View>
          </View>
        </View>

        {/* New: full-width sheet outside `cards`, so it ignores the cards' side padding */}
        <View style={styles.panel}>
          <SectionHeader
            title="Quick Links"
            // Customising the list is out of scope, so the link does nothing
            right={<LinkText label="Customise" onPress={() => {}} />}
          />
          <View style={styles.grid}>
            {quickLinks.map(({ id, route, ...item }) => (
              <QuickLinkItem
                key={id}
                {...item}
                // navigate switches to the tab instead of stacking a second copy of it
                onPress={route ? () => router.navigate(route) : undefined}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.backdrop },
  cards: { paddingHorizontal: spacing.xl, gap: spacing.lg },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowLabel: { color: colors.offWhite, fontSize: fontSize.body },
  rowAmount: {
    color: colors.white,
    fontSize: fontSize.body,
    fontWeight: "600",
  },
  amountGroup: { flexDirection: "row", alignItems: "center", gap: spacing.md },
  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accountCard: { paddingTop: spacing.sm, zIndex: 1 }, // zIndex keeps the card above the strip tucked behind it
  badge: {
    alignSelf: "flex-start",
    backgroundColor: colors.surface,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  badgeText: {
    color: colors.primary,
    fontSize: fontSize.caption,
    fontWeight: "600",
  },
  identity: { marginTop: spacing.lg, gap: spacing.xs },
  accountLine: {
    color: colors.offWhite,
    fontSize: fontSize.body,
    fontWeight: "500",
    flexShrink: 1,
  },
  holderName: {
    color: colors.white,
    fontSize: fontSize.subtitle,
    fontWeight: "700",
  },
  available: { marginTop: spacing.lg, gap: spacing.xs },
  smallLabel: { color: colors.offWhite, fontSize: fontSize.caption },
  bigAmount: {
    color: colors.white,
    fontSize: fontSize.amount,
    fontWeight: "700",
  },
  ledgerStrip: {
    backgroundColor: colors.surfaceRaised,
    marginTop: -radius.md, // pulls the strip up behind the card's rounded bottom corners
    paddingTop: radius.md + spacing.xs,
    paddingBottom: spacing.xs,
    paddingHorizontal: spacing.lg,
    borderBottomLeftRadius: radius.md,
    borderBottomRightRadius: radius.md,
  },
  panel: {
    marginTop: spacing.xxl + spacing.lg, // 48 points, measured from the reference
    backgroundColor: colors.background,
    borderTopLeftRadius: radius.md,
    borderTopRightRadius: radius.md,
    paddingTop: spacing.lg,
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
    gap: spacing.lg,
  },
  grid: { flexDirection: "row", flexWrap: "wrap", rowGap: spacing.xl },
});
