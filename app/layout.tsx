import './globals.css'; import Nav from '@/components/Nav'; import Footer from '@/components/Footer';
export const metadata={title:'HXIL · Human-X Interaction Lab',description:'Human-X Interaction Lab at the University of Calgary. X represents the evolving counterparts with which humans interact—from XR and AI to intelligent agents, machines, environments, and people.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Nav/><main>{children}</main><Footer/></body></html>}
