
import { DotGothic16 } from "next/font/google";
import 'app/sass/globals.sass'
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer/Footer";
import { Analytics } from "@vercel/analytics/react"

const dotGothic16 =DotGothic16({
  weight: [ "400"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dotGothic16.className}>
        <Header/>
        
        {children}
        <Analytics/>
        
        <Footer/>
      </body>
      
    </html>
  );
}
