import { Providers } from './providers';
import { Flex } from '@chakra-ui/react'
import Header from './_components/Header';
import SideNav from './_components/SideNav';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Flex direction='column' minHeight='100vh'>
            <Header />
            <Flex direction='row' flex='1'>
              <Flex width='250px' flexShrink={0}>
                <SideNav />
              </Flex>
              <Flex justify='center' flex='1' overflowY='auto'>
                {children}
              </Flex>
            </Flex>
          </Flex>
        </Providers>
      </body>
    </html>
  )
}
