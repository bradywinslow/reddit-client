'use client'

import { Providers } from './providers';
import { Flex, useMediaQuery } from '@chakra-ui/react';
import DesktopHeader from './_components/DesktopHeader';
import MobileHeader from './_components/MobileHeader';
import SideNav from './_components/SideNav';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMobile] = useMediaQuery("(max-width: 48em)");
  
  return (
    <html lang="en">
      <body>
        <Providers>
          {!isMobile ? (
            <Flex direction='column' minHeight='100vh'>
              <DesktopHeader />
              <Flex direction='row' flex='1'>
                <Flex width='250px' flexShrink={0}>
                  <SideNav />
                </Flex>
                <Flex justify='center' flex='1' overflowY='auto'>
                  {children}
                </Flex>
              </Flex>
            </Flex>
          ) : (
            <Flex direction='column' minHeight='100vh'>
              <MobileHeader />
              <Flex direction='row' flex='1'>
                <Flex justify='center' flex='1' overflowY='auto'>
                  {children}
                </Flex>
              </Flex>
            </Flex>
          )}
        </Providers>
      </body>
    </html>
  )
}
