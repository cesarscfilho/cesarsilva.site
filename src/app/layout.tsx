import "@/styles/globals.css"
import { absoluteUrl, cn } from "@/lib/utils"
import type { Metadata, Viewport } from "next"

import { ThemeProvider } from "@/components/theme-provider"
import { fontSans } from "@/lib/fonts"
import { CONFIG } from "@/config"
import { env } from "@/env.mjs"
import { Shell } from "@/components/shells/shell"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: CONFIG.title,
  description: CONFIG.metadata.description,
  keywords: ["nextjs", "react", "react server components", "cesar silva"],
  authors: [
    {
      name: CONFIG.name,
      url: CONFIG.metadata.url,
    },
  ],
  creator: CONFIG.name,
  openGraph: {
    type: "website",
    locale: "pt-BR",
    url: CONFIG.metadata.url,
    title: CONFIG.name,
    description: CONFIG.metadata.description,
    siteName: CONFIG.name,
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
