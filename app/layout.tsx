import { Providers } from './providers';
import Header from './_components/Header';
import SideNav from './_components/SideNav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <SideNav />
          {children}
        </Providers>
      </body>
    </html>
  )
}
