import type { OptionItem } from "@/types";

export type BillSource = "zenith" | "quickteller";

// Labels for the two toggle pills, in display order
export const billSources: { id: BillSource; label: string }[] = [
  { id: "zenith", label: "Zenith Billers" },
  { id: "quickteller", label: "Quickteller Merchants" },
];

// Record<BillSource, ...> demands exactly one list per source: a missing one is a type error.
// No icon or image here: the screen draws an Avatar from each title instead.
export const billCategories: Record<BillSource, OptionItem[]> = {
  zenith: [
    {
      id: "airlines",
      title: "Airlines",
      subtitle: "Pay for flight tickets and travel expenses",
    },
    {
      id: "cable-tv",
      title: "Cable Tv",
      subtitle: "Pay for cable TV subscriptions seamlessly",
    },
    { id: "charities", title: "Charities", subtitle: "Charities" },
    {
      id: "churches",
      title: "Churches",
      subtitle: "Make tithes, offerings and donations easily",
    },
    {
      id: "consulates",
      title: "Consulates and Embassies",
      subtitle: "Consulates and Embassies",
    },
    {
      id: "education",
      title: "Education",
      subtitle: "Pay school fees and exam registration",
    },
    {
      id: "electricity",
      title: "Electricity",
      subtitle: "Pay for prepaid and postpaid electricity",
    },
    {
      id: "insurance",
      title: "Insurance",
      subtitle: "Pay premiums and renew your policies",
    },
    {
      id: "internet",
      title: "Internet Services",
      subtitle: "Pay for broadband and data subscriptions",
    },
    {
      id: "taxes",
      title: "Taxes and Levies",
      subtitle: "Pay taxes and government levies",
    },
  ],
  quickteller: [
    {
      id: "betting",
      title: "Betting and Lottery",
      subtitle: "Fund your betting and lottery wallets",
    },
    {
      id: "food",
      title: "Food Delivery",
      subtitle: "Pay for meals and grocery orders",
    },
    { id: "hotels", title: "Hotels", subtitle: "Book and pay for hotel stays" },
    {
      id: "shopping",
      title: "Online Shopping",
      subtitle: "Pay for online and in-store purchases",
    },
    {
      id: "transport",
      title: "Transport",
      subtitle: "Pay for rides and transport passes",
    },
  ],
};
