import { Heading, Text, VStack } from "@chakra-ui/react";
import { profileContext } from "../../../../context/ProfileContext";
import { useContext } from "react";

const SteamupInterests = () => {
  const { profile } = useContext(profileContext);
  const interests = profile?.interestsInSTEAM;
  const interestsArray = interests.map((interest) => interest.split("-"));
  return (
    <VStack align={"flex-start"}>
      <Heading fontSize={["1rem", "1.25rem"]} pb={10}>
        STEAM'd uP Interests:
        <Text fontSize={["0.75rem", "1rem"]}>
          Science, Tech, Engineering, the Arts & Maths
        </Text>
      </Heading>
      {interestsArray?.map((interest) => (
        <>
          <Text as={"b"}>{interest[0]}</Text>
          <Text>{interest[1]}</Text>
        </>
      ))}
    </VStack>
  );
};

export default SteamupInterests;
