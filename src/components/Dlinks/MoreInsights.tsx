import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import banner from "@/assets/images/banner.jpg";
const insights = [
  {
    title: "Level Being 9 Apiary",
    description: (
      <Text>
        Level Being 9 Apiary is interested in all things to do with the STEM and
        Art of beekeeping. We are developing a directory and networking forum of
        beekeeping organisation and practitioners panAfrica.
      </Text>
    ),
  },
  {
    title: "Community Science Lab",
    description: (
      <Text>
        uLearn Naturally Community Science Lab seeks to establish community
        based learning centres focused on STEM, explored in culturally inclusive
        and engaging ways. Community Science Labs will focus on; a) Communal
        science lab facilities - made accessible to all, b) Space observatory -
        telescopes and radio, c) STEM Open Learning Resource rooms, d)
        Planetarium - VR and immersive projections, e) Lab cafe - light
        edutainment spaces.
      </Text>
    ),
  },
  {
    title: "Creators’ Hubs",
    description: (
      <Text>
        We will be developing a localised learners cooperative hubs around STEM
        and the first pilot project “DIY Build A Recumbent Trike project”. This
        project will involve learners in design (CAD), metalworking (frame
        building), general recumbent trike construction to point of completion,
        quality testing and naturally, in cycling. The main intention being
        about engaging children, youth and adults in transferable STEM
        competency development in the context of environmental awareness and the
        advancement of healthful (more sustainable) ways of travelling.
      </Text>
    ),
  },
  {
    title: "DopA - Directory of panAfrica",
    description: (
      <Text>
        We are developing a directory and networking forum of panAfrican
        Organisations and Coordinators.
      </Text>
    ),
  },
];

const MoreInsights = () => {
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
          height="400px"
        ></iframe>
      </Box>
    </Flex>
  );
};

export default MoreInsights;
