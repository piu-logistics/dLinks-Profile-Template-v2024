import {
  AspectRatio,
  Box,
  Grid,
  GridItem,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Dlinks from "@/assets/appsGateway/dLinksWhite.png";
import FullScreenImage from "../Global/FullScreenImage";
import user from "@/assets/user.png";
import passport from "@/assets/passport.jpg";
import animation from "@/assets/animation.mp4";
import BrightnessIcon from "@/assets/BrightnessIcon.png";
import { FaShareAlt } from "react-icons/fa";
import { useState } from "react";

interface ProfileHeaderProps {
  opacity: number;
  increaseOpacityByStep: () => void;
}

const ProfileHeaderSmall = ({
  increaseOpacityByStep,
  opacity,
}: ProfileHeaderProps) => {
  return (
    <Box
      display={["block", "block", "block", "none"]}
      position={"relative"}
      maxH={["90%", "65%"]}
      overflow={"hidden"}
      mb={"10"}
    >
      <AspectRatio
        position={"absolute"}
        top={0}
        objectFit={"cover"}
        left={0}
        w={"100%"}
        h={"full"}
        zIndex={-1}
      >
        <video autoPlay muted loop>
          <source src={animation} type="video/mp4" />
        </video>
      </AspectRatio>
      <Box
        position={"absolute"}
        top={0}
        objectFit={"cover"}
        left={0}
        w={"100%"}
        h={"full"}
        zIndex={-1}
        opacity={opacity}
        bg={"black"}
      />
      <Image
        src={BrightnessIcon}
        alt="Brightness Icon"
        onClick={increaseOpacityByStep}
        cursor={"pointer"}
        borderRadius={"md"}
        h={6}
        w={6}
        shadow={"md"}
        mt={2}
        ml={2}
      />

      <Grid
        templateColumns={["1fr"]}
        pt={[2, 4, 10]}
        px={[2, 10, 20]}
        zIndex={2}
        userSelect={"none"}
      >
        <GridItem
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          placeSelf={"self-end"}
          mb={4}
        >
          <FullScreenImage
            imageStyles={{ h: "20", w: "20" }}
            imageUrl={Dlinks}
          />

          <Icon as={FaShareAlt} fill={"white"} h={4} w={4} mt={2} />
        </GridItem>
        <GridItem display={"flex"}>
          <SimpleGrid columns={2} spacingX={2}>
            <FullScreenImage
              containerStyles={{ border: "2px solid white" }}
              imageUrl={passport}
            />
            <FullScreenImage
              imageUrl={user}
              containerStyles={{ border: "2px solid white", flex: 1 }}
              imageStyles={{ h: "full", w: "full", objectFit: "cover" }}
            />
          </SimpleGrid>
        </GridItem>
        <GridItem display={"grid"} gridTemplateColumns={"1fr 1fr"} my={4}>
          <Text color={"white"}>Citizen:</Text>
          <Text color={"white"}>AlemAkuchi</Text>
          <Text color={"white"}>Passport Ref: </Text>
          <Text as={"b"} color={"white"}>
            1st Gen 30
          </Text>
          <Text color={"white"}>OnWeb3 Status: </Text>
          <Text color={"white"} as={"b"}>
            2:9
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
const ProfileHeaderLarge = ({
  opacity,
  increaseOpacityByStep,
}: ProfileHeaderProps) => {
  return (
    <Box
      display={["none", "none", "none", "block"]}
      position={"relative"}
      maxH={["90vh", "65vh"]}
      overflow={"hidden"}
      mb={"10"}
    >
      <AspectRatio
        position={"absolute"}
        top={0}
        objectFit={"cover"}
        left={0}
        w={"100%"}
        h={"full"}
        zIndex={-1}
      >
        <video autoPlay muted loop>
          <source src={animation} type="video/mp4" />
        </video>
      </AspectRatio>
      <Box
        position={"absolute"}
        top={0}
        objectFit={"cover"}
        left={0}
        w={"100%"}
        h={"full"}
        zIndex={-1}
        opacity={opacity}
        bg={"black"}
      />
      <Image
        src={BrightnessIcon}
        alt="Brightness Icon"
        onClick={increaseOpacityByStep}
        cursor={"pointer"}
        borderRadius={"md"}
        h={6}
        w={6}
        shadow={"md"}
        mt={2}
        ml={2}
      />
      <Grid
        templateColumns={["1fr 1fr 1fr"]}
        px={[2, 10, 20]}
        zIndex={2}
        pb={4}
        userSelect={"none"}
      >
        <GridItem
          display={"flex"}
          flexDirection={"column"}
          p={20}
          gap={2}
          alignItems={"center"}
        >
          <FullScreenImage imageUrl={Dlinks} />

          <Icon as={FaShareAlt} fill={"white"} h={8} w={8} />
        </GridItem>
        <GridItem display={"flex"} flexDirection={"column"} px={[0, 5, 5, 10]}>
          <FullScreenImage
            containerStyles={{
              mb: 5,
              maxH: "60%",
            }}
            imageUrl={passport}
            imageStyles={{ objectFit: "cover", border: "2px solid white" }}
          />
          <SimpleGrid columns={2}>
            <Text color={"white"}>Citizen:</Text>
            <Text color={"white"}>AlemAkuchi</Text>
            <Text color={"white"}>Passport Ref: </Text>
            <Text as={"b"} color={"white"}>
              1st Gen 30
            </Text>
            <Text color={"white"}>OnWeb3 Status: </Text>
            <Text color={"white"} as={"b"}>
              2:9
            </Text>
          </SimpleGrid>
        </GridItem>
        <GridItem display={"flex"} flexDirection={"column"}>
          <FullScreenImage
            imageUrl={user}
            containerStyles={{
              maxH: "60%",
            }}
            imageStyles={{ objectFit: "cover", border: "2px solid white" }}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

const ProfileHeader = () => {
  const [opacity, setOpacity] = useState(1);

  const increaseOpacityByStep = () => {
    //increase opacity by step of 0.1 with mod
    console.log(opacity);
    if (opacity < 1) {
      setOpacity(opacity + 0.1);
    }

    if (opacity >= 1) {
      setOpacity(0.1);
    }
  };
  return (
    <>
      <ProfileHeaderSmall
        increaseOpacityByStep={increaseOpacityByStep}
        opacity={opacity}
      />
      <ProfileHeaderLarge
        increaseOpacityByStep={increaseOpacityByStep}
        opacity={opacity}
      />
    </>
  );
};

export default ProfileHeader;
