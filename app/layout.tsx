import { Providers } from './providers';
import { Grid, GridItem } from '@chakra-ui/react'
import Header from './_components/Header';
import SideNav from './_components/SideNav';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Grid
            templateAreas={`"header header"
                            "nav main"`}
            gridTemplateRows={'1fr 4fr'}
            gridTemplateColumns={'250px 4fr'}
            h='100vh'
          >
            <GridItem area={'header'}>
              <Header />
            </GridItem>
            <GridItem area={'nav'}>
              <SideNav />
            </GridItem>
            <GridItem area={'main'}>
              {children}
            </GridItem>
          </Grid>
        </Providers>
      </body>
    </html>
  )
}

/*
          <Flex direction='column'>
            <Header />
            <Flex direction='row'>
              <Flex width="20%" p={4}>
                <SideNav />
              </Flex>
              <Flex width='80%' p={4}>
                {children}
              </Flex>
            </Flex>
          </Flex>
*/