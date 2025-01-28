import { Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";
import { subredditData } from '../_reddit/subredditData.js';
import { usePathname } from 'next/navigation';

export default function MobileMenu() {
    const currentPath = usePathname();

    return (
        <Menu isLazy>
            <MenuButton
                as={IconButton}
                icon={<IoMenu />}
                _hover={{ bg: 'gray.200' }}
                _expanded={{ bg: 'gray.300' }}
                bg='white'
            />
            <Flex align='center' justify='center'>
                <MenuList overflowY='auto' maxH='70vh' position='absolute'>
                    {subredditData.map((item, index) => {
                        return (
                            <MenuItem
                                key={index}
                                as='a'
                                href={item.path}
                                justifyContent='center'
                                fontSize='sm'
                                bg={currentPath === item.path ? 'gray.200' : ''}
                                _hover={{ bg: 'gray.100' }}
                            >
                                <Link href={item.path} passHref>{item.name}</Link>
                            </MenuItem>
                        )
                    })}
                </MenuList>
            </Flex>
        </Menu>
    )
}
