import { Flex, Heading } from "@chakra-ui/react";
import MainContent from "./_components/MainContent";

export default function Home() {
  return (
    <Flex direction='column' align='center' mx={7}>
      <Heading>Home</Heading>
      <MainContent />
    </Flex>
  );
}
