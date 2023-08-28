import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TyZ - Interim Tech Lead',
  description:
    'Highly skilled Frontend expert with 20+ years of experience in web development and leadership. Able to set up, develop and maintain complex (frontend) systems, leading (international) development teams. Worked on many (award winning) projects specialized in scripting and architecture.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
