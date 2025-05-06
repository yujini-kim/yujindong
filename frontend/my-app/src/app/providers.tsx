"use client";

import { lightTheme } from "@/styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GoogleOAuthProvider } from "@react-oauth/google";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <GoogleOAuthProvider clientId="1036900568540-f9ljgdnvj5n2c317j0hm8jdo3t345m5j.apps.googleusercontent.com">
      <ThemeProvider theme={lightTheme}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}
