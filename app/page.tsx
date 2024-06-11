import { Flex } from "@chakra-ui/react";
import MainContent from "./_components/MainContent";
import SubHeader from "./_components/SubHeader";

export default function Home() {
  return (
    <Flex direction='column' align='center' mx={7}>
      <SubHeader text='' />
      <MainContent />
    </Flex>
  );
}
