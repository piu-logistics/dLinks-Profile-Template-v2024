import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { profileContext } from "../../../../context/ProfileContext";

const CounteriesOfInterest = () => {
  const { profile } = useContext(profileContext);
  const { threeAfricanCountries, registeredCountryOfResidence } = profile;
  return (
    <Flex
      flexDir={["column", "row"]}
      align={"flex-start"}
      justifyContent={"space-between"}
    >
      <VStack align={"flex-start"}>
        <Heading
          pb={[0, 0, 10]}
          pt={[10, 10, 0]}
          fontSize={["1rem", "1.25rem"]}
        >
          African countries of interest:
        </Heading>
        {threeAfricanCountries.map((country: string) => (
          <Text key={country}>{country}</Text>
        ))}
      </VStack>
      <VStack align={"flex-start"}>
        <Heading
          pb={[0, 0, 10]}
          pt={[10, 10, 0]}
          fontSize={["1rem", "1.25rem"]}
        >
          Country of residence:
        </Heading>
        <Text>{registeredCountryOfResidence}</Text>
      </VStack>
    </Flex>
  );
};

export default CounteriesOfInterest;
