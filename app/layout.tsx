import { Providers } from './providers';
import { Flex } from '@chakra-ui/react'
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
          <Flex direction='column'>
            <Header />
            <Flex direction='row'>
              <SideNav />
              <Flex justify='center' w='100%'>
                {children}
              </Flex>
            </Flex>
          </Flex>
        </Providers>
      </body>
    </html>
  )
}
