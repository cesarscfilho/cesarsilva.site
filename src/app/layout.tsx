import { absoluteUrl, cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata, Viewport } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { fontSans } from "@/lib/fonts";
import { siteConfig } from "@/lib/config";
import { env } from "@/env.mjs";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "nextjs",
    "react",
    "react server components",
    "cesar silva"
  ],
  authors: [
    {
      name: "cesarsilva",
      url: "https://www.cesarsilva.site/",
    },
  ],
  creator: "cesarsilva",
  openGraph: {
    type: "website",
    locale: "pt-BR",
    url:siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: absoluteUrl("/site.webmanifest"),
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}
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
