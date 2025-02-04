"use client";

import ThemeProvider from "./shared/providers/ThemeProvider";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <ThemeProvider>{children}</ThemeProvider>;

export default Providers;
