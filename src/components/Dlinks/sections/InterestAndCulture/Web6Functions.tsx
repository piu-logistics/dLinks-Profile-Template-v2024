import {
  Box,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import gem from "@/assets/Quartz.png";
import { useContext } from "react";
import { profileContext } from "../../../../context/ProfileContext";

const Web6Functions = () => {
  const { profile } = useContext(profileContext);
  const { reorderWeb6Functions, preciousMaterialChoice } = profile;
  return (
    <VStack align={"flex-start"}>
      <Heading pb={10} fontSize={["1rem", "1.25rem"]}>
        STEAM'd uP Interests - In order of interest:
      </Heading>
      <UnorderedList fontSize={["1rem", "1.25rem"]}>
        {reorderWeb6Functions?.map((item: string) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </UnorderedList>
      <Flex width={"50%"} justifyContent={"space-between"} align={"center"}>
        <Box>
          <Heading py={10} fontSize={["1rem", "1.25rem"]}>
            Precious Material Choice:
          </Heading>
          <Text>{preciousMaterialChoice[0]}</Text>
        </Box>
        <Image src={gem} h="120px" w={"120px"} />
      </Flex>
    </VStack>
  );
};

export default Web6Functions;
