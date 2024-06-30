import { Dosis } from "next/font/google";
import "./globals.css";

const inter = Dosis({ subsets: ["latin"] });

import { ThemeProvider } from "./_components/material-tailwind";
import Providers from "./_components/Providers";

export const metadata = {
  title: "Dani y Nico - Nuestro Casamiento - 18.10.2024",
  description: "Te esperamos para pasar un momento increible en estancia La Linda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <Providers>
          <body className={inter.className}>
            {children}
          </body>
        </Providers>
      </ThemeProvider>
    </html>
  );
}
