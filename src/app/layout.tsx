// "use client"

import { Navbar } from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { DarkModeToggle } from "@/components/Buttons/DarkModeButton";
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // useEffect(() => {
  //   document.body.classList.add('transition-colors', 'duration-300');
  //   return () => {
  //     document.body.classList.remove('transition-colors', 'duration-300');
  //   };
  // }, []);

  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar>
            <DarkModeToggle />
          </Navbar>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
