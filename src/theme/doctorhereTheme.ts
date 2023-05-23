import { DefaultTheme } from "styled-components";
import { colors, Colors as _Colors } from "./colors";
import { fontWeight, FontWeight as _FontWeight } from "./fontWeight";

export namespace DoctorHereTheme {
  export type Colors = _Colors;
  export type FontWeight = _FontWeight;
}

const theme: DefaultTheme = {
  colors,
  fontWeight,
};

export default theme;
