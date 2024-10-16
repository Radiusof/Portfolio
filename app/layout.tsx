import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from './provider';

import './globals.css';
// import { ModeToggle } from './theme-toggle';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: "Kevin's new portfolio",
  description: 'Made with NextJs, Tailwind CSS, Aceternety UI & Framer Motion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Theme Toggle (next update) */}
          {/* <ModeToggle></ModeToggle> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
