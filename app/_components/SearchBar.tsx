'use client'

import { 
    Flex,
    Icon,
    Input,
    InputGroup,
    InputLeftElement } from '@chakra-ui/react';
import { GoSearch } from 'react-icons/go';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBar() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((searchTerm: string) => {
        const params = new URLSearchParams(searchParams);
        if (searchTerm) {
            params.set('query', searchTerm);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
        console.log(searchTerm);
    }, 300);

    return (
        <Flex mt='95px'>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <Icon as={GoSearch}/>
                </InputLeftElement>
                <Input
                    type='text'
                    autoComplete='off'
                    variant='outline'
                    placeholder='Search'
                    size='md'
                    w={[200, 250, 300, 350]}
                    borderRadius={15}
                    onChange={(e) => {
                        handleSearch(e.target.value);
                    }}
                    defaultValue={searchParams.get('query')?.toString()}
                ></Input>
            </InputGroup>
        </Flex>
    )
}
