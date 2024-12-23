import { Providers } from './providers';
import LayoutContent from './_components/LayoutContent';
import './globals.css';

export const metadata = {
  title: 'Reddit Client Gaming Feed'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <LayoutContent>{children}</LayoutContent>
        </Providers>
      </body>
    </html>
  )
}
