import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode, ReactElement } from 'react';
import { Footer } from '@/app/components/Footer';
import { Header } from '@/app/components/Header';
import { keywords } from '@/app/data/copy';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'TYZ - Thijs Broerse - Interim Tech Lead & Freelance Frontend Architect',
  description:
    'Highly skilled Frontend expert with 20+ years of experience in web development and leadership. Able to set up, develop and maintain complex (frontend) systems, leading (international) development teams. Worked on many (award winning) projects specialized in scripting and architecture.',
  keywords,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full flex flex-col items-center min-h-screen justify-between">
          <Header />

          <main className="w-full flex flex-col items-center lg:max-w-5xl max-lg:px-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
