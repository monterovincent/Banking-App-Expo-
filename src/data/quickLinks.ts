import type { IconName } from "@/types";
import type { Href } from "expo-router";
import type { ImageSourcePropType } from "react-native";

export type QuickLink = {
  id: string;
  label: string;
  icon?: IconName; // generic items use an Ionicon
  image?: ImageSourcePropType; // brand items use an image file
  imageBadge?: boolean; // true for logos drawn for a light background
  route?: Href; // only set where a destination exists in the clone
};

export const quickLinks: QuickLink[] = [
  {
    id: "dangote-shares",
    label: "Buy Dangote Shares",
    image: require("../../assets/images/dangote-mark.png"),
    imageBadge: true,
  },
  {
    id: "transaction-history",
    label: "Transaction History",
    icon: "receipt-outline",
  },
  {
    id: "zenith-transfers",
    label: "Zenith Transfers",
    image: require("../../assets/images/zenith-mark.png"),
    route: "/transfer",
  },
  {
    id: "airtime-data",
    label: "Airtime & Data",
    icon: "phone-portrait-outline",
    route: "/airtime",
  },
  {
    id: "zenith-billers",
    label: "Zenith Billers",
    icon: "flash-outline",
    route: "/bills",
  },
  {
    id: "usd-pension",
    label: "USD Pension Remittance",
    icon: "briefcase-outline",
  },
  { id: "card-services", label: "Card Services", icon: "card-outline" },
  {
    id: "beneficiary-management",
    label: "Beneficiary Management",
    icon: "people-outline",
  },
];
