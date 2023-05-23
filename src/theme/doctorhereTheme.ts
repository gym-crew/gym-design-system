import { DefaultTheme } from "styled-components";
import colors from "./colors";
import fontWeight from "./fontWeight";

export namespace DoctorHereTheme {
  export type Colors = typeof colors;
  export type FontWeight = typeof fontWeight;
}

const theme: DefaultTheme = {
  colors,
  fontWeight,
};

export default theme;
