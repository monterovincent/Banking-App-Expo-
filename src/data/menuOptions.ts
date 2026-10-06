import type { OptionItem } from "@/types";

// No routes: none of these destinations exist in the clone.
// The first five entries are from the reference; QR Payments' title is too (its subtitle is cut off there).
// The rest are invented so the search has something to filter.
export const menuOptions: OptionItem[] = [
  {
    id: "account-services",
    title: "Account Services",
    subtitle: "Manage all services on your account",
    icon: "business",
  },
  {
    id: "card-services",
    title: "Card Services",
    subtitle: "Manage services on your credit, debit or prepaid card",
    icon: "card",
  },
  {
    id: "investment",
    title: "Investment",
    subtitle: "Manage all your investments",
    icon: "briefcase",
  },
  {
    id: "save-repeat",
    title: "Save and Repeat Payment",
    subtitle: "Repeat a previous payment",
    icon: "book",
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
    subtitle: "Enjoy lifestyle on Travel-start and Dubai visa",
    icon: "umbrella",
  },
  {
    id: "qr-payments",
    title: "QR Payments",
    subtitle: "Pay and get paid by scanning a QR code",
    icon: "qr-code",
  },
  {
    id: "loans",
    title: "Loans",
    subtitle: "Apply for and manage your loans",
    icon: "wallet",
  },
  {
    id: "cardless-withdrawal",
    title: "Cardless Withdrawal",
    subtitle: "Get cash at an ATM without your card",
    icon: "cash",
  },
  {
    id: "help-support",
    title: "Help and Support",
    subtitle: "Get answers or talk to us",
    icon: "headset",
  },
];
