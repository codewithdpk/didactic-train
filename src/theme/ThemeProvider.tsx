import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import pallete from "./pallete";
import "@fontsource/roboto-slab"; // Defaults to weight 400.

export default function MuiThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const theme = createTheme({
    palette: pallete,
    typography: {
      fontFamily: "Roboto Slab",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
