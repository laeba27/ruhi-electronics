import './globals.css';
import { Inter } from 'next/font/google';
import ThemeProvider from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import ChatNow from "@/components/ChatNow";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ruhi Electricals - Premium Electrical Products',
  description: 'Manufacturer of high-quality electrical products including immersion rods, water heaters, room heaters, and ceiling fans',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
              <ChatNow phoneNumber="919717809918" />
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}