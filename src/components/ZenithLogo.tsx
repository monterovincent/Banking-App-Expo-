import { Image } from "react-native";

type ZenithLogoProps = {
  size?: number; // rendered height in points
  showWordmark?: boolean; // true: Z with "ZENITH" text; false: Z alone
};

// Image paths are  meant to be  be static strings so the bundler can find them at build time
const logoWithWordmark = require("../../assets/images/zenith-logo.png");
const logoMarkOnly = require("../../assets/images/zenith-mark.png");

export function ZenithLogo({
  size = 40,
  showWordmark = false,
}: ZenithLogoProps) {
  return (
    <Image
      source={showWordmark ? logoWithWordmark : logoMarkOnly}
      accessibilityLabel="Zenith Bank logo"
      // aspectRatio is the file's width / height, so width follows the height we pass
      style={{
        height: size,
        aspectRatio: showWordmark ? 244 / 258 : 236 / 203,
      }}
      resizeMode="contain"
    />
  );
}
