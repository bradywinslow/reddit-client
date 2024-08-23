'use client'

import { Providers } from './providers';
import React, { useState, useEffect } from 'react';
import { Flex, useMediaQuery } from '@chakra-ui/react';
import DesktopHeader from './_components/DesktopHeader';
import MobileHeader from './_components/MobileHeader';
import SideNav from './_components/SideNav';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 48em)");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <html lang="en">
      <body>
        <Providers>
          
          {/* Desktop view */}
          <Flex
            direction='column'
            h='100vh'
            display={isMobile ? "none" : "flex"}
          >
            <DesktopHeader />
            <Flex direction='row' flex='1' overflow='hidden'>
              <Flex width='250px' flexShrink={0}>
                <SideNav />
              </Flex>
              <Flex justify='center' flex='1' overflowY='auto' mt='75px'>
                {children}
              </Flex>
            </Flex>
          </Flex>

          {/* Mobile view */}
          <Flex
            direction='column'
            h='100vh'
            display={!isMobile ? "none" : "flex"}
          >
            <MobileHeader />
            <Flex direction='row' flex='1' overflow='hidden'>
              <Flex justify='center' flex='1' overflowY='auto' mt='75px'>
                {children}
              </Flex>
            </Flex>
          </Flex>

        </Providers>
      </body>
    </html>
  )
}
