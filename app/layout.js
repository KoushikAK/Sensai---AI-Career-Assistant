import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header";
import Footer from "@/components/footer2";
import { ClerkProvider } from "@clerk/nextjs";
import { Jost } from 'next/font/google';
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";

const jost = Jost({
  subsets: ['latin'],
  // You can specify the weights you want to use
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Sensai - AI Career Assistant",
  description: "An AI powered platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${jost.className}`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
             <Toaster />
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
