import type { IconName } from "@/types";

export type Shortcut = {
  id: string;
  label: string;
  icon?: IconName; // generic items use an Ionicon
  brandMark?: string; // brand-only items use a text stand-in for the logo
};

// Welcome footer pills
export const welcomeShortcuts: Shortcut[] = [
  { id: "internet-banking", label: "Internet Banking", icon: "globe-outline" },
  { id: "support", label: "Support", icon: "chatbox-ellipses-outline" },
  { id: "ziva", label: "ZIVA" },
];

// Login grid: different items, order, and labels from Welcome, so its own list
export const loginShortcuts: Shortcut[] = [
  { id: "quick-banking", label: "Quick Banking", icon: "card-outline" },
  { id: "support", label: "Support", icon: "ribbon-outline" },
  { id: "internet-banking", label: "Internet Banking", icon: "globe-outline" },
  { id: "open-account", label: "Open account", icon: "id-card-outline" },
  { id: "sme-offers", label: "SME OFFERS", brandMark: "SME Grow" },
  { id: "ziva-chat", label: "Chat with Ziva", brandMark: "ZIVA" },
];
