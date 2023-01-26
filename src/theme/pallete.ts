import { blue, green, orange } from "@mui/material/colors";

interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

interface BackgroundColor {
  default: string;
  paper: string;
}

interface TextColor {
  primary: string;
  secondary: string;
}

interface ColorsPallete {
  mode: ThemeMode;
  primary: PaletteColor;
  secondary: PaletteColor;
  warning: PaletteColor;
  info: PaletteColor;
  success: PaletteColor;
  error: PaletteColor;
  background: BackgroundColor;
  text: TextColor;
}

type ThemeMode = "dark" | "light";

const pallete: ColorsPallete = {
  mode: "dark",
  primary: {
    light: "#3574F3",
    main: "#FF4F39",
  },
  secondary: {
    light: "#00E55F",
    main: "#00E55F",
  },
  warning: {
    light: orange[400],
    main: orange[400],
  },
  info: {
    light: blue[400],
    main: blue[400],
  },
  success: {
    light: green[400],
    main: green[400],
  },
  error: {
    light: "#FF4F39",
    main: "#FF4F39",
  },
  background: {
    default: "#0D0D0B",
    paper: "#373737",
  },
  text: {
    primary: "#FFF",
    secondary: "#999999",
  },
};

export default pallete;
