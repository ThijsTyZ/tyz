import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'TyZ - Thijs Broerse - Interim Tech Lead & Freelance Frontend Architect',
  description:
    'Highly skilled Frontend expert with 20+ years of experience in web development and leadership. Able to set up, develop and maintain complex (frontend) systems, leading (international) development teams. Worked on many (award winning) projects specialized in scripting and architecture.',
  keywords: [
    'Frontend',
    'React',
    'TypeScript',
    'Thijs Broerse',
    'TyZ',
    'Freelance',
    'interim Frontend Lead',
    'Interim Tech Lead',
    'Angular',
    'Vue',
    'Architecture',
    'Developer',
    'Development',
    'Website',
  ],
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
