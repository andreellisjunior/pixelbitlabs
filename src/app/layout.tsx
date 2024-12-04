import type { Metadata } from 'next';

import './globals.css';
import { monts } from './fonts/config';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Creating Solutions for your Business | PixelBit Labs',
  description:
    'From idea to launch, we’re here to bring your vision to life. Let’s build digital experiences that drive growth and success.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <meta property='og:image' content='<generated>' />
        <meta property='og:image:type' content='<generated>' />
        <meta property='og:image:width' content='<generated>' />
        <meta property='og:image:height' content='<generated>' />
      </Head>
      <body
        className={`${monts.className} antialiased bg-[#0C0A10] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
