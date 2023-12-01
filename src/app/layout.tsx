import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";


import { ThemeProvider } from "@/components/theme-provider";
import { fontSans } from "@/lib/fonts";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
         <body
         className={cn(
           "min-h-screen bg-background font-sans antialiased",
           fontSans.variable,
         )}
       >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
