import './globals.css'; import Nav from '@/components/Nav'; import Footer from '@/components/Footer';
export const metadata={title:'HXI Lab · Human-X Interaction Lab',description:'Human-X Interaction Lab at the University of Calgary: XR, AI, human-centered computing, and intelligent immersive systems.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Nav/><main>{children}</main><Footer/></body></html>}
