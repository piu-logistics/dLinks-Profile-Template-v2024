import {
  Box,
  Flex,
  Heading,
  Image,
  ListItem,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
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

          {preciousMaterialChoice[0]}
        </Box>
        <Image
          blendMode={"multiply"}
          src={`https://alkebulanmeta.app/wp-content/uploads/2023/11/Gem-Material-${preciousMaterialChoice[0]}-100x100.png.jpg`}
        />
      </Flex>
    </VStack>
  );
};

export default Web6Functions;
