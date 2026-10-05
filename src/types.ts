import type { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import type { ImageSourcePropType } from "react-native";

export type IconName = ComponentProps<typeof Ionicons>["name"];

// Shape shared by every list drawn with OptionCard (Transfer, Airtime, Bills, Menu)
export type OptionItem = {
  id: string;
  title: string;
  subtitle: string;
  icon?: IconName; // generic items use an Ionicon
  image?: ImageSourcePropType; // brand items use an image file
};
