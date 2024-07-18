import { 
    Flex,
    Icon,
    Input,
    InputGroup,
    InputLeftElement } from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";

export default function SearchBar() {
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
                ></Input>
            </InputGroup>
        </Flex>
    )
}
