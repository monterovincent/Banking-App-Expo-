import type { IconName } from "@/types";

export type Shortcut = {
  id: string;
  label: string;
  icon?: IconName; // brand-only items (ZIVA) have no icon
};

// Welcome footer pills; the Login grid gets its own list in milestone 3
export const welcomeShortcuts: Shortcut[] = [
  { id: "internet-banking", label: "Internet Banking", icon: "globe-outline" },
  { id: "support", label: "Support", icon: "chatbox-ellipses-outline" },
  { id: "ziva", label: "ZIVA" },
];
