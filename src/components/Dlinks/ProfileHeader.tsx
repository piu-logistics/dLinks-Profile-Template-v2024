import {
  AspectRatio,
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import Dlinks from "@/assets/appsGateway/dLinksWhite.png";
import FullScreenImage from "../Global/FullScreenImage";
import user from "@/assets/user.png";
import passport from "@/assets/passport.jpg";
import animation from "@/assets/animation.mp4";
import { FaPlus, FaShareAlt } from "react-icons/fa";
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
      <Icon
        as={FaPlus}
        onClick={increaseOpacityByStep}
        fill={"white"}
        cursor={"pointer"}
        borderRadius={"md"}
        h={6}
        w={6}
        shadow={"md"}
        mt={2}
        _hover={{ bg: "white", fill: "black" }}
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

          <Button
            maxW={"fit-content"}
            mt={2}
            fontSize={"xs"}
            px={2}
            h={"auto"}
            py={1}
            leftIcon={<Icon as={FaShareAlt} />}
          >
            Share
          </Button>
        </GridItem>
        <GridItem display={"flex"} flexDirection={"column"} mb={2}>
          <HStack mb={2} placeItems={"start"}>
            <FullScreenImage
              containerStyles={{ border: "2px solid white", flex: 1 }}
              imageUrl={passport}
            />
            <FullScreenImage
              imageUrl={user}
              containerStyles={{ border: "2px solid white", flex: 1 }}
            />
          </HStack>
          <Text color={"white"}>
            Passport Ref:{" "}
            <Text as={"b"} color={"white"}>
              1st Gen 30
            </Text>
          </Text>
          <Text color={"white"}>
            Your OnWeb3 Status is{" "}
            <Text color={"white"} as={"b"}>
              2:9
            </Text>
          </Text>

          <Text color={"white"}> Citizen: AlemAkuchi</Text>
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
      <Icon
        as={FaPlus}
        onClick={increaseOpacityByStep}
        fill={"white"}
        cursor={"pointer"}
        borderRadius={"md"}
        h={6}
        w={6}
        shadow={"md"}
        mt={2}
        ml={2}
        _hover={{ bg: "white", fill: "black" }}
      />
      <Grid
        templateColumns={["1fr 1fr 1fr"]}
        pt={[2, 4, 10]}
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
          <Button
            maxW={"fit-content"}
            mt={2}
            px={2}
            leftIcon={<Icon as={FaShareAlt} />}
          >
            Share
          </Button>
        </GridItem>
        <GridItem display={"flex"} flexDirection={"column"} px={[0, 5, 5, 10]}>
          <FullScreenImage
            containerStyles={{
              maxH: "70%",
            }}
            imageUrl={passport}
            imageStyles={{ objectFit: "cover", border: "2px solid white" }}
          />
          <Text color={"white"}>
            Passport Ref:{" "}
            <Text as={"b"} color={"white"}>
              1st Gen 30
            </Text>
          </Text>
          <Text color={"white"}>
            Your OnWeb3 Status is{" "}
            <Text color={"white"} as={"b"}>
              2:9
            </Text>
          </Text>
        </GridItem>
        <GridItem display={"flex"} flexDirection={"column"}>
          <FullScreenImage
            imageUrl={user}
            containerStyles={{ border: "2px solid white" }}
          />
          <Text placeSelf={"end"} color={"white"}>
            Citizen: AlemAkuchi
          </Text>
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
