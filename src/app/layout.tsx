import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode, ReactElement } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { keywords, title, description, email, phonenumber } from '@/data/copy';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title,
  description,
  keywords,
  openGraph: {
    type: 'website',
    title,
    description,
    images: ['/img/thijs.jpeg'],
    emails: [email.text],
    phoneNumbers: [phonenumber.text],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white bg-gradient-to-b from-white via-white to-orangeStart/10 `}
      >
        <div className="w-full flex flex-col items-center min-h-screen justify-between">
          <Header />

          <main className="w-full flex flex-col items-center lg:max-w-5xl max-lg:px-10">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
