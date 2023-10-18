import { BoxProps, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import SliderWithThumb from "../../../Global/Slider";
import { useContext } from "react";
import { profileContext } from "../../../../context/ProfileContext";
const sliderItemStyles: BoxProps = {
  flexDir: ["column", "column", "column", "row"],
  w: "100%",
  mb: 2,
};

const GeneralInterests = () => {
  const { profile } = useContext(profileContext);
  const {
    baseCharacterIAmMotherEarthLover,
    baseCharacteriAmEnvironmentalScienceEnthusiasts,
    baseCharacteriAmPowerOfBlackIdentityEnthusiasts,
    baseCharacteriAmWeb3Enthusiasts,
  } = profile;

  return (
    <VStack align={"flex-start"}>
      <Heading
        whiteSpace={"nowrap"}
        pb={[5, 5, 5, 10]}
        fontSize={["1rem", "1.25rem"]}
      >
        General Interest:
        <Text fontSize={["0.75rem", "1rem"]}>Through four dimensions</Text>
      </Heading>
      <VStack w={"100%"}>
        <Flex {...sliderItemStyles}>
          <Text w="50%" whiteSpace={"nowrap"}>
            I am a Mother Earth Lover
          </Text>
          <SliderWithThumb value={baseCharacterIAmMotherEarthLover} />
        </Flex>
        <Flex {...sliderItemStyles}>
          <Text w="50%" whiteSpace={"nowrap"}>
            I am a Web3 Enthusiast
          </Text>
          <SliderWithThumb value={baseCharacteriAmWeb3Enthusiasts} />
        </Flex>
        <Flex {...sliderItemStyles}>
          <Text w="50%" whiteSpace={"nowrap"}>
            I am a STEM Enthusiast
          </Text>
          <SliderWithThumb
            value={baseCharacteriAmEnvironmentalScienceEnthusiasts}
          />
        </Flex>
        <Flex {...sliderItemStyles}>
          <Text w="50%" whiteSpace={"nowrap"}>
            I am a African Identity Enthusiast
          </Text>
          <SliderWithThumb
            value={baseCharacteriAmPowerOfBlackIdentityEnthusiasts}
          />
        </Flex>
      </VStack>
    </VStack>
  );
};

export default GeneralInterests;
