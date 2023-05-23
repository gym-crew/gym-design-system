import "styled-components";
import { DoctorHereTheme } from "./theme/doctorhereTheme";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: DoctorHereTheme.Colors;
    fontWeight: DoctorHereTheme.FontWeight;
  }
}
