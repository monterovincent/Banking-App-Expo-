import type { OptionItem } from "@/types";

// No routes yet: the Form screen that these open arrives in a later milestone
export const purchaseOptions: OptionItem[] = [
  {
    id: "airtime",
    title: "Buy Airtime",
    subtitle: "Buy airtime for yourself or others",
    icon: "phone-portrait",
  },
  {
    id: "data",
    title: "Buy Data",
    subtitle: "Buy data for yourself or others",
    icon: "wifi",
  },
];
