"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { ComponentPropsWithoutRef } from "react";

export type ThemeProviderProps = ComponentPropsWithoutRef<
  typeof NextThemesProvider
>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export { useTheme };
