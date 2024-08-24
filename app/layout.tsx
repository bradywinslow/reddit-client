'use client'

import { Providers } from './providers';
import React, { useState, useEffect } from 'react';
import { Flex, useMediaQuery } from '@chakra-ui/react';
import DesktopHeader from './_components/DesktopHeader';
import MobileHeader from './_components/MobileHeader';
import SideNav from './_components/SideNav';
import SearchBar from './_components/SearchBar';
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
          <Flex direction='column' h='100vh'>
            {/* Conditionally render MobileHeader or DesktopHeader */}
            {isMobile ? <MobileHeader /> : <DesktopHeader />}

            <Flex direction='row' flex='1' overflow='hidden'>
              {/* Conditionally render sideNav in desktop view */}
              {!isMobile && (
                  <Flex width='250px' flexShrink={0}>
                    <SideNav />
                </Flex>
              )}
              <Flex
                direction='column'
                align='center'
                justify='center'
                w='100%'
                flex='1'
                overflowY='auto'
                mt='75px'
              >
                {children}
              </Flex>
            </Flex>
          </Flex>
        </Providers>
      </body>
    </html>
  )
}
