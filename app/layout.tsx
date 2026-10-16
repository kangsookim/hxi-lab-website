import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata = {
  title: 'HXIL · Human-X Interaction Lab',
  description:
    'Human-X Interaction Lab at the University of Calgary. X represents the evolving counterparts with which humans interact—from XR and AI to intelligent agents, machines, environments, and people.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3JE1L2KZEL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3JE1L2KZEL');
          `}
        </Script>
      </body>
    </html>
  );
}