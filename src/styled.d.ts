import "styled-components";

export namespace DoctorHereTheme {
  export interface Colors {
    amber100: string;
    amber100p: string;
    amber200p: string;
    logoGreen: string;
    doctorhereGreen: string;
    white: string;
    gray100: string;
    gray150: string;
    gray200: string;
    gray300: string;
    gray350: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;
    black: string;
    teal500: string;
    teal100p: string;
    teal200p: string;
    teal300p: string;
    orange100p: string;
    orange200p: string;
    orange300: string;
    orange400: string;
    orange500: string;
    orange700: string;
    blue100p: string;
    blue300: string;
    blue400: string;
    green100p: string;
    green200p: string;
    green300p: string;
    green700: string;
    errorRed: string;
    successGreen: string;
    cautionYellow: string;
    webTeal: string;
    webOrange: string;
    webBack: string;
  }

  export interface FontWeight {
    regular: number;
    medium: number;
    semiBold: number;
    bold: number;
    extraBold: number;
  }

  export type MobileWidth = number;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: DoctorHereTheme.Colors;
    fontWeight: DoctorHereTheme.FontWeight;
  }
}
