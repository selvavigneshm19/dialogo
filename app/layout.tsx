import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Anek_Bangla } from 'next/font/google';
import '../styles/globals.css';

const anek = Anek_Bangla({
  subsets: ['latin'],
  display: 'swap',
});

let title = 'Dialogo';
let description = 'Chat with your PDFs in seconds.';

export const metadata: Metadata = {

  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title,
    description,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={anek.className}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
