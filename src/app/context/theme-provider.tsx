"use client";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../utils/themes";
export default function NextThemeProvider({
	children,
}: {
	children: React.ReactNode;
}): React.ReactNode {
	return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}
