import { cn } from "@/libs/utils";
import "./globals.css";
import type { Metadata } from "next";


import { ThemeProvider } from "@/components/theme-provider";
import { fontSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Cesar - Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full h-screen bg-gray-50">

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
