import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    borderColor: string;
    accentColor: string;
    shadowColor: string;
    circleColor: string;
    boxColor: string;
  }
}
