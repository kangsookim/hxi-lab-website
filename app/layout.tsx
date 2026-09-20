import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HXI Lab | Human-X Interaction Lab',
  description: 'Human-X Interaction Lab at the University of Calgary. Research in XR, AI, virtual agents, social interaction, healthcare, and human-centered computing.'
};
export default function RootLayout({children}:{children:React.ReactNode}){ return <html lang="en"><body><Nav/>{children}<Footer/></body></html> }
