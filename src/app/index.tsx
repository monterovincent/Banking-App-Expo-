import { AppButton } from "@/components/AppButton";
import { ZenithLogo } from "@/components/ZenithLogo";
import { welcomeShortcuts, type Shortcut } from "@/data/shortcuts";
import { colors, fontSize, radius, spacing } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// New: only used on this screen and small, so it stays in this file
function ShortcutPill({ label, icon }: Shortcut) {
  return (
    <View style={styles.pill}>
      {icon && <Ionicons name={icon} size={20} color={colors.white} />}
      <Text style={styles.pillLabel}>{label}</Text>
    </View>
  );
}

export default function WelcomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets(); // height of the notch / home bar on this phone

  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("../../assets/images/welcome-bg.jpeg")}
        style={styles.background}
      >
        {/* Dark layer over the photo; top padding keeps the logo clear of the notch */}
        <View style={[styles.overlay, { paddingTop: insets.top + spacing.lg }]}>
          <View style={styles.logoRow}>
            <ZenithLogo size={60} showWordmark />
          </View>

          <View style={styles.hero}>
            <Text style={styles.headline}>{"Banking\nMade Eazy"}</Text>
            <Text style={styles.subtitle}>
              Experience a new world of banking, simplified with the new Zenith
              Bank Mobile Banking App
            </Text>
            <View style={styles.buttons}>
              <AppButton label="Login" onPress={() => router.push("/login")} />
              {/* Static in this clone: Quick Banking is out of scope, so it does nothing */}
              <AppButton
                label="Quick Banking"
                variant="outline"
                onPress={() => {}}
              />
            </View>
          </View>
        </View>
      </ImageBackground>

      {/* New: footer sits below the photo; bottom padding clears the home bar */}
      <View
        style={[
          styles.footer,
          { paddingBottom: Math.max(insets.bottom, spacing.lg) },
        ]}
      >
        <View style={styles.pills}>
          {welcomeShortcuts.map((item) => (
            <ShortcutPill key={item.id} {...item} />
          ))}
        </View>
        <View style={styles.legalRow}>
          <Text style={styles.legal}>
            © {new Date().getFullYear()} Zenith Bank PLC | Licensed by the
            Central Bank of Nigeria
          </Text>
          {/* Stand-in for the regulator's seal */}
          <Ionicons
            name="shield-checkmark"
            size={18}
            color={colors.textMuted}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.black },
  background: { flex: 1 },
  overlay: { flex: 1, backgroundColor: colors.overlay },
  logoRow: { alignItems: "flex-end", paddingHorizontal: spacing.lg },
  hero: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
    gap: spacing.lg,
  },
  headline: {
    color: colors.white,
    fontSize: fontSize.display,
    fontWeight: "700",
    lineHeight: 48,
  },
  subtitle: { color: colors.offWhite, fontSize: fontSize.body, lineHeight: 22 },
  buttons: { marginTop: spacing.xl, gap: spacing.xl },
  footer: {
    backgroundColor: colors.black,
    paddingTop: spacing.lg,
    paddingHorizontal: spacing.lg,
    gap: spacing.xl,
    alignItems: "center",
  },
  pills: { flexDirection: "row", justifyContent: "center", gap: spacing.md },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
  },
  pillLabel: {
    color: colors.white,
    fontSize: fontSize.caption,
    fontWeight: "500",
  },
  legalRow: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  legal: {
    flexShrink: 1,
    color: colors.textMuted,
    fontSize: fontSize.small,
    textAlign: "center",
  },
});
