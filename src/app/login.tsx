import { AppButton } from "@/components/AppButton";
import { LinkText } from "@/components/LinkText";
import { TextField } from "@/components/TextField";
import { ZenithLogo } from "@/components/ZenithLogo";
import { loginShortcuts, type Shortcut } from "@/data/shortcuts";
import { user } from "@/data/user";
import { colors, fontSize, radius, spacing } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Single-use and small, so it stays in this file
function ShortcutGridItem({ label, icon, brandMark }: Shortcut) {
  return (
    <View style={styles.gridItem}>
      {/* Fixed-height slot keeps labels aligned whether the item has an icon or a text mark */}
      <View style={styles.gridIconSlot}>
        {icon && <Ionicons name={icon} size={26} color={colors.white} />}
        {brandMark && <Text style={styles.brandMark}>{brandMark}</Text>}
      </View>
      <Text style={styles.gridLabel}>{label}</Text>
    </View>
  );
}

export default function LoginScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets(); // keeps content clear of the notch and home bar
  const [accountNumber, setAccountNumber] = useState(user.accountNumber);
  const [passcode, setPasscode] = useState("");

  // Derived once, used in the heading and the switch-user line
  const displayName = user.firstName.toUpperCase();

  // Derived from state, not stored: recalculated on every keystroke
  const canSubmit = passcode.length > 0;

  // Mock auth: no backend, so any passcode is accepted.
  // replace() drops Login from the back stack, so Home can't navigate back to it.
  const handleLogin = () => router.replace("/home");

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: insets.top + spacing.sm,
            paddingBottom: insets.bottom + spacing.xl,
          },
        ]}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerRow}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Go back"
            hitSlop={12}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={28} color={colors.primary} />
          </Pressable>
          {/* Decorative for now; notifications are out of scope */}
          <Ionicons
            name="notifications-outline"
            size={26}
            color={colors.white}
          />
        </View>

        <View style={styles.intro}>
          <View style={styles.logoTile}>
            <ZenithLogo size={44} />
          </View>
          <Text style={styles.heading}>Welcome back,</Text>
          <Text style={[styles.heading, styles.name]}>{displayName}</Text>
          <Text style={styles.subtitle}>Proceed to login to your account</Text>
        </View>

        <View style={styles.form}>
          <TextField
            label="Account Number"
            value={accountNumber}
            onChangeText={setAccountNumber}
            keyboardType="number-pad"
          />
          <TextField
            label="Passcode"
            // Out of scope in this clone, so the link does nothing
            labelAction={
              <LinkText label="Forgot Passcode" onPress={() => {}} />
            }
            value={passcode}
            onChangeText={setPasscode}
            placeholder="Enter your passcode"
            secureTextEntry
          />
        </View>

        <View style={styles.actions}>
          <AppButton
            label="Login with passcode"
            onPress={handleLogin}
            disabled={!canSubmit}
          />
          <AppButton
            label="Login with Face ID"
            variant="light"
            onPress={handleLogin}
          />
          <Text style={styles.hint}>
            Demo: tap Face ID, or enter any passcode
          </Text>
        </View>

        {/* LinkText nests inside Text, so the link sits inside the sentence */}
        <Text style={styles.switchUser}>
          Not {displayName}, <LinkText label="Switch User" onPress={() => {}} />
        </Text>

        {/* Display-only: none of these destinations exist in the clone */}
        <View style={styles.grid}>
          {loginShortcuts.map((item) => (
            <ShortcutGridItem key={item.id} {...item} />
          ))}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  content: { paddingHorizontal: spacing.lg }, // side margins live inside the scroll area
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  intro: { alignItems: "center", marginTop: spacing.xl },
  logoTile: {
    width: 80,
    height: 80,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.xl,
  },
  heading: {
    color: colors.white,
    fontSize: fontSize.heading,
    fontWeight: "700",
    lineHeight: 36,
    textAlign: "center",
  },
  name: { color: colors.primary }, // overrides the white from `heading`
  subtitle: {
    color: colors.textMuted,
    fontSize: fontSize.body,
    marginTop: spacing.sm,
  },
  form: { marginTop: spacing.xxl, gap: spacing.xxl },
  actions: { marginTop: spacing.xl, gap: spacing.xl },
  hint: {
    color: colors.textMuted,
    fontSize: fontSize.caption,
    textAlign: "center",
  },
  switchUser: {
    color: colors.white,
    fontSize: fontSize.body,
    textAlign: "center",
    marginTop: spacing.xl,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: spacing.lg,
    marginTop: spacing.xl,
  },
  gridItem: { width: "33.33%", alignItems: "center", gap: spacing.xs },
  gridIconSlot: { height: 30, justifyContent: "center" },
  brandMark: {
    color: colors.white,
    fontSize: fontSize.subtitle,
    fontWeight: "800",
  }, // stand-in for brand logos
  gridLabel: {
    color: colors.white,
    fontSize: fontSize.caption,
    textAlign: "center",
  },
});
