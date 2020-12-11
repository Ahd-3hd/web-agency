import { FontSizes, FontWeights, Space, Theme } from "../types/theme";

const colors = {
  primary: "#04004D",
  secondary: "#00D385",
  purple: "#9D98EC",
  darkPurple: "#7C79A6",
  ghost: "#F6F7FF",
  lightPurple: "#D4D4EA",
  white: "#ffffff",
  offwhite: "#FCFDFF",
};

const spaces: Space = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "32px",
  xl: "48px",
};

const fontSizes: FontSizes = {
  xs: "10px",
  sm: "12px",
  pr: "14px",
  md: "16px",
  lg: "24px",
  xl: "38px",
};

const fontWeights: FontWeights = {
  normal: "400",
  medium: "500",
  bold: "600",
  extraBold: "700",
  black: "900",
};

const theme: Theme = {
  colors,
  fontSizes,
  spaces,
  fontWeights,
};

export default theme;
