import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import banner from "@/assets/images/banner.jpg";
import { useContext } from "react";
import { profileContext } from "../../context/ProfileContext";

const MoreInsights = () => {
  const { profile } = useContext(profileContext);
  const {
    dopAbasicallyIAAm,
    dopAorgAddressCity,
    dopAorgAddressCountry,
    dopAorgAddressPostalCode,
    dopAorgAddressState,
    dopAorgAddressStreet,
    dopAorgName,
    dopApositionRoleinOrg,
    dopAsomeWordsAboutMyInterest,
    lB9AbasicallyIAm,
    lB9AorgAddressCity,
    lB9AorgAddressCountry,
    lB9AorgAddressPostalCode,
    lB9AorgAddressState,
    lB9AorgAddressStreet,
    lB9AorgName,
    lB9ApositionRoleinOrg,
    lB9AsomeWordsAboutMyInterest,
    cSLbasicallyIAm,
    cSLorgAddressCity,
    cSLorgAddressCountry,
    cSLorgAddressPostalCode,
    cSLorgAddressState,
    cSLorgAddressStreet,
    cSLorgName,
    cSLpositionRoleinOrg,
    cSLsectorsAndIndustries,
    cSLsomeWordsAboutMyInterest,
    cHsectorsAndIndustries,
    cHsomeWordsAboutMyInterest,
    cHbasicallyIAm,
    cHorgAddressCity,
    cHorgAddressCountry,
    cHorgAddressPostalCode,
    cHorgAddressState,
    cHorgAddressStreet,
    cHorgName,
    cHpositionRoleinOrg,
  } = profile;

  const insights = [
    {
      title: "Level Being 9 Apiary",
      description: (
        <>
          <Text>
            Level Being 9 Apiary is interested in all things to do with the STEM
            and Art of beekeeping. We are developing a directory and networking
            forum of beekeeping organisation and practitioners panAfrica.
          </Text>
          <Box>
            {lB9AbasicallyIAm && (
              <Text>
                I'm adding this Level Being 9 Apiary dLinks Profile Enhancement
                because I am&nbsp;
                <Text as={"span"} fontWeight={"bold"}>
                  {lB9AbasicallyIAm}
                </Text>
              </Text>
            )}
            {lB9ApositionRoleinOrg && (
              <Text>
                Position / Role in Organisation {lB9ApositionRoleinOrg}
              </Text>
            )}
            {lB9AorgName && <Text>Organisation Name {lB9AorgName}</Text>}
            {lB9AorgAddressStreet && (
              <Text> Street {lB9AorgAddressStreet}</Text>
            )}
            {lB9AorgAddressCity && <Text> City {lB9AorgAddressCity}</Text>}
            {lB9AorgAddressState && <Text> State {lB9AorgAddressState}</Text>}
            {lB9AorgAddressCountry && (
              <Text> Country {lB9AorgAddressCountry}</Text>
            )}
            {lB9AorgAddressPostalCode && (
              <Text> Postal Code {lB9AorgAddressPostalCode}</Text>
            )}
            {lB9AsomeWordsAboutMyInterest && (
              <Text> About My Interests {lB9AsomeWordsAboutMyInterest}</Text>
            )}
          </Box>
        </>
      ),
    },
    {
      title: "Community Science Lab",
      description: (
        <>
          <Text>
            uLearn Naturally Community Science Lab seeks to establish community
            based learning centres focused on STEM, explored in culturally
            inclusive and engaging ways. Community Science Labs will focus on;
            a) Communal science lab facilities - made accessible to all, b)
            Space observatory - telescopes and radio, c) STEM Open Learning
            Resource rooms, d) Planetarium - VR and immersive projections, e)
            Lab cafe - light edutainment spaces.
          </Text>
          <Box display={"flex"} flexDirection={"column"} gap={4}>
            {cSLbasicallyIAm && (
              <Text>
                I'm adding this Community Science Labs dLinks Profile
                Enhancement because I am &nbsp;
                <Text as={"span"} fontWeight={"bold"}>
                  {cSLbasicallyIAm}
                </Text>
              </Text>
            )}
            {cSLpositionRoleinOrg && (
              <Text>
                Position / Role in Organisation {cSLpositionRoleinOrg}
              </Text>
            )}
            {cSLorgName && <Text>Organisation Name {cSLorgName}</Text>}
            {cSLorgAddressStreet && <Text> Street {cSLorgAddressStreet}</Text>}
            {cSLorgAddressCity && <Text> City {cSLorgAddressCity}</Text>}
            {cSLorgAddressState && <Text> State {cSLorgAddressState}</Text>}
            {cSLorgAddressCountry && (
              <Text> Country {cSLorgAddressCountry}</Text>
            )}
            {cSLorgAddressPostalCode && (
              <Text> Postal Code {cSLorgAddressPostalCode}</Text>
            )}

            {cSLsomeWordsAboutMyInterest && (
              <Text> About My Interests {cSLsomeWordsAboutMyInterest}</Text>
            )}
            {cSLsectorsAndIndustries && (
              <Text>
                {" "}
                Sectors and industries of special interest to me.{" "}
                {cSLsectorsAndIndustries}
              </Text>
            )}
          </Box>
        </>
      ),
    },
    {
      title: "Creators’ Hubs",
      description: (
        <>
          <Text>
            We will be developing a localised learners cooperative hubs around
            STEM and the first pilot project “DIY Build A Recumbent Trike
            project”. This project will involve learners in design (CAD),
            metalworking (frame building), general recumbent trike construction
            to point of completion, quality testing and naturally, in cycling.
            The main intention being about engaging children, youth and adults
            in transferable STEM competency development in the context of
            environmental awareness and the advancement of healthful (more
            sustainable) ways of travelling.
          </Text>
          <Box display={"flex"} flexDirection={"column"} gap={4}>
            {cHbasicallyIAm && (
              <Text>
                I'm adding this Creators' Hubs dLinks Profile Enhancement
                because I am {""}
                <Text as={"span"} fontWeight={"bold"}>
                  {cHbasicallyIAm}
                </Text>
              </Text>
            )}

            {cHpositionRoleinOrg && (
              <Text>Position / Role in Organisation {cHpositionRoleinOrg}</Text>
            )}
            {cHorgName && <Text>Organisation Name {cHorgName}</Text>}
            {cHorgAddressStreet && <Text> Street {cHorgAddressStreet}</Text>}
            {cHorgAddressCity && <Text> City {cHorgAddressCity}</Text>}
            {cHorgAddressState && <Text> State {cHorgAddressState}</Text>}
            {cHorgAddressCountry && <Text> Country {cHorgAddressCountry}</Text>}
            {cHorgAddressPostalCode && (
              <Text> Postal Code {cHorgAddressPostalCode}</Text>
            )}

            {cHsomeWordsAboutMyInterest && (
              <Text> About My Interests {cHsomeWordsAboutMyInterest}</Text>
            )}
            {cHsectorsAndIndustries && (
              <Text>
                Sectors and industries of special interest to me.{" "}
                {cSLsectorsAndIndustries}
              </Text>
            )}
          </Box>
        </>
      ),
    },
    {
      title: "DopA - Directory of panAfrica",
      description: (
        <>
          <Text>
            We are developing a directory and networking forum of panAfrican
            Organisations and Coordinators.
          </Text>
          <Box display={"flex"} flexDirection={"column"} gap={4}>
            {dopAbasicallyIAAm && (
              <Text>
                I'm adding this DopA dLinks Profile Enhancement because I am{" "}
                <Text as={"span"} fontWeight={"bold"}>
                  {dopAbasicallyIAAm}
                </Text>
              </Text>
            )}
            {dopApositionRoleinOrg && (
              <Text>
                Position / Role in Organisation {dopApositionRoleinOrg}
              </Text>
            )}
            {dopAorgName && <Text>Organisation Name {dopAorgName}</Text>}
            {dopAorgAddressStreet && (
              <Text> Street {dopAorgAddressStreet}</Text>
            )}
            {dopAorgAddressCity && <Text> City {dopAorgAddressCity}</Text>}
            {dopAorgAddressState && <Text> State {dopAorgAddressState}</Text>}
            {dopAorgAddressCountry && (
              <Text> Country {dopAorgAddressCountry}</Text>
            )}
            {dopAorgAddressPostalCode && (
              <Text> Postal Code {dopAorgAddressPostalCode}</Text>
            )}
            {dopAsomeWordsAboutMyInterest && (
              <Text> About My Interests {dopAsomeWordsAboutMyInterest}</Text>
            )}
          </Box>
        </>
      ),
    },
  ];

  return (
    <Flex flexDirection={"column"} gap={8}>
      <Heading color={"black"}>OnWeb3 Radio</Heading>
      <iframe
        id="embed_player"
        width="100%"
        height="400px"
        src="https://onweb3.airtime.pro/embed/player?stream=auto&skin=2"
      ></iframe>

      <Text fontWeight={"bold"} textAlign={"right"}>
        Listen to OnWeb3 Radio Now
      </Text>
      <Text>
        OnWeb3 Radio is the official broadcaster for the Alkebulan
        Network-State. We cover all things STEM, panAfrica; that’s Science,
        Technology, Engineering and Maths across Africa. Our Focus is STEM from
        an African place of being.
      </Text>
      <Text>Listen | Learn | Connect | Build</Text>
      <Flex flexDirection={"column"} gap={2}>
        <a href="https://alkebulanmeta.app/contact-us/">
          Become one of our Citizen Journalists
        </a>
        <a href="https://alkebulanmeta.app/contact-us/">
          Federate your STEM related radio show to our Network-State.
        </a>
      </Flex>
      <Image src={banner} alt="banner" />

      <Heading color={"black"}>My Enhanced Profiles</Heading>
      {insights.map((item, index) => (
        <VStack key={index} alignItems={"start"}>
          <Heading fontSize={"1.5rem"}>{item.title}</Heading>
          {item.description}
        </VStack>
      ))}
      <Heading color={"black"}>AlkebulanMeta Videos</Heading>

      <Box mx={"auto"} minW={"80%"}>
        <iframe
          src="https://vimeo.com/showcase/10762314/embed"
          width="100%"
          height="600px"
        ></iframe>
      </Box>
    </Flex>
  );
};

export default MoreInsights;
