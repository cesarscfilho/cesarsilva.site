import "@/styles/globals.css"
import { cn } from "@/lib/utils"
import type { Metadata, Viewport } from "next"

import { ThemeProvider } from "@/components/theme-provider"
import { fontSans } from "@/lib/fonts"
import { Shell } from "@/components/shells/shell"
import { CONFIG } from "@/config"

export const metadata: Metadata = {
  metadataBase: new URL(CONFIG.url),
  title: { default: CONFIG.name, template: `%s | ${CONFIG.name}` },
  description: CONFIG.description,
  keywords: ["nextjs", "react", "react server components", "cesar silva"],
  authors: [
    {
      name: CONFIG.name,
      url: CONFIG.url,
    },
  ],
  creator: CONFIG.name,
  openGraph: {
    type: "website",
    locale: "pt-BR",
    url: CONFIG.url,
    title: CONFIG.name,
    description: CONFIG.description,
    siteName: CONFIG.name,
  },
  icons: {
    icon: "/favicon.ico",
  },
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
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="b64f83a8-e087-40b1-905a-407d83f47885"
          async
        ></script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Shell as="main" variant="main">
            {children}
          </Shell>
        </ThemeProvider>
      </body>
    </html>
  )
}
