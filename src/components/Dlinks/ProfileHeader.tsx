import {
  AspectRatio,
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Dlinks from "@/assets/appsGateway/dLinksWhite.png";
import FullScreenImage from "../Global/FullScreenImage";
import user from "@/assets/user.png";
import passport from "@/assets/passport.jpg";
import animation from "@/assets/animation.mp4";
const ProfileHeaderSmall = () => {
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
      <Grid
        templateColumns={["1fr"]}
        pt={[2, 4, 10]}
        px={[2, 10, 20]}
        zIndex={2}
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
            h={6}
            w={4}
            px={2}
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
              1st gen 400
            </Text>
          </Text>
          <Text color={"white"}>
            Your OnWeb3 Status is{" "}
            <Text color={"white"} as={"b"}>
              2:9
            </Text>
          </Text>

          <Text color={"white"}>User Name</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
const ProfileHeaderLarge = () => {
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
      <Grid
        templateColumns={["1fr 1fr 1fr"]}
        pt={[2, 4, 10]}
        px={[2, 10, 20]}
        zIndex={2}
        pb={4}
      >
        <GridItem display={"flex"} flexDirection={"column"} p={20} gap={2}>
          <FullScreenImage imageUrl={Dlinks} />
          <Button>Share</Button>
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
              1st gen 400
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
            User Name
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

const ProfileHeader = () => {
  return (
    <>
      <ProfileHeaderSmall />
      <ProfileHeaderLarge />
    </>
  );
};

export default ProfileHeader;
