import type { OptionItem } from "@/types";

// No routes yet: the Form screen that these open arrives in a later milestone
export const transferOptions: OptionItem[] = [
  {
    id: "zenith",
    title: "Transfer to Zenith Bank Accounts",
    subtitle: "Send money to another Zenith bank account",
    image: require("../../assets/images/zenith-mark.png"),
  },
  {
    id: "other-banks",
    title: "Transfer to Other Bank Accounts",
    subtitle: "Send money to other bank account",
    icon: "business-outline",
  },
  {
    id: "papss",
    title: "PAPSS Transfer",
    subtitle: "Send money to other bank accounts across Africa",
    icon: "globe-outline",
  },
  {
    id: "foreign",
    title: "Foreign Transfer",
    subtitle: "Send money across borders",
    icon: "globe",
  },
  {
    id: "wallet",
    title: "Zenith eaZy Wallet",
    subtitle: "Send money to Zenith eaZy wallet",
    icon: "wallet-outline",
  },
];
