"use client";

import { ThemeProvider } from "styled-components";
import { lightTheme } from "@/styles/theme";
import { Providers } from "./providers";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Providers>{children}</Providers>
    </ThemeProvider>
  );
}
