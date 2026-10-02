// sampled colors for reference
export const colors = {
  background: "#1E1D23",
  surface: "#282828", // icon tiles, avatars
  surfaceRaised: "#3D3D3D", // ledger strip
  border: "#4A4A4F", // estimated, tune against screenshots
  primary: "#B71E18",
  primaryDark: "#0E0000", // active pill fill
  black: "#080808", // welcome footer
  overlay: "rgba(0, 0, 0, 0.35)", // dark layer over the welcome photo
  white: "#FFFFFF",
  offWhite: "#F6F6F6", // Face ID button
  textMuted: "#9A9AA0", // estimated
  disabled: "#434343",
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;
export const radius = { sm: 8, md: 12, pill: 999 } as const;
export const fontSize = {
  small: 11,
  caption: 13,
  body: 15,
  subtitle: 16,
  title: 22,
  heading: 32,
  display: 36,
} as const;
