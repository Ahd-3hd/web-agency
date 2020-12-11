export interface Space {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface FontSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  pr: string;
}

export interface FontWeights {
  normal: string;
  medium: string;
  bold: string;
  extraBold: string;
  black: string;
}

export interface Colors {
  primary: string;
  secondary: string;
  purple: string;
  darkPurple: string;
  ghost: string;
  lightPurple: string;
  white: string;
  offwhite: string;
}

export interface Theme {
  colors: Colors;
  fontSizes: FontSizes;
  spaces: Space;
  fontWeights: FontWeights;
}
