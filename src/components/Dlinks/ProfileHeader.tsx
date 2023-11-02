import {
  AspectRatio,
  Box,
  Grid,
  GridItem,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Dlinks from "@/assets/appsGateway/dLinksWhite.png";
import FullScreenImage from "../Global/FullScreenImage";
import user from "@/assets/user.png";
import passport from "@/assets/passport.png";
import animation from "@/assets/animation.mp4";
import BrightnessIcon from "@/assets/BrightnessIcon.png";
import { FaShareAlt } from "react-icons/fa";
import { useContext, useState } from "react";
import { Profile, profileContext } from "../../context/ProfileContext";
import {
  RedditShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  RedditIcon,
} from "react-share";
interface ProfileHeaderProps {
  opacity: number;
  increaseOpacityByStep: () => void;
  profile: Profile;
}

const ProfileHeaderSmall = ({
  increaseOpacityByStep,
  opacity,
  profile,
}: ProfileHeaderProps) => {
  const shareUrl = new URL(window.location.href);
  const [share, setShare] = useState(false);
  return (
    <Box
      display={["block", "block", "block", "none"]}
      position={"relative"}
      maxH={["90%", "65%"]}
      overflow={"hidden"}
      mb={"10"}
    >
      <Modal isOpen={share} onClose={() => setShare(!share)} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton onClick={() => setShare(!share)} />
          <ModalBody>
            <SimpleGrid
              columns={4}
              gap={2}
              w="full"
              justifyItems={"space-between"}
            >
              <FacebookShareButton url={shareUrl.toString()}>
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>

              <TwitterShareButton url={shareUrl.toString()}>
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <WhatsappShareButton url={shareUrl.toString()}>
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>
              <RedditShareButton url={shareUrl.toString()}>
                <RedditIcon size={32} round={true} />
              </RedditShareButton>
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>

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
          <Image
            src={Dlinks}
            alt="Image"
            maxW="100%"
            maxH="100%"
            h="20"
            w="20"
          />

          <Icon
            as={FaShareAlt}
            fill={"white"}
            h={4}
            w={4}
            mt={2}
            onClick={() => setShare(!share)}
          />
        </GridItem>
        <GridItem display={"flex"}>
          <SimpleGrid columns={2} spacingX={2}>
            <FullScreenImage
              containerStyles={{ border: "2px solid white" }}
              imageUrl={
                profile?.activeOnWeb3PassportofficialNFTImageUrl?.length! > 0
                  ? (profile?.activeOnWeb3PassportofficialNFTImageUrl as string)
                  : (passport as string)
              }
            />
            <FullScreenImage
              imageUrl={profile?.uploadedProfileImage ?? user}
              containerStyles={{ border: "2px solid white", flex: 1 }}
              imageStyles={{ h: "full", w: "full", objectFit: "cover" }}
            />
          </SimpleGrid>
        </GridItem>
        <GridItem display={"grid"} gridTemplateColumns={"1fr 1fr"} my={4}>
          <Text color={"white"}>Citizen:</Text>
          <Text color={"white"}>{profile?.registeredDisplayName}</Text>
          Passport Ref:{profile?.activeOnWeb3PassportnftNumber}{" "}
          <Text as={"b"} color={"white"}>
            {profile?.activeOnWeb3PassportnftNumber}
          </Text>
          <Text color={"white"}>OnWeb3 Status: </Text>
          <Text color={"white"} as={"b"}>
            {profile?.statusOnWeb3}
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
const ProfileHeaderLarge = ({
  opacity,
  increaseOpacityByStep,
  profile,
}: ProfileHeaderProps) => {
  const shareUrl = new URL(window.location.href);
  const [share, setShare] = useState(false);

  return (
    <Box
      display={["none", "none", "none", "block"]}
      position={"relative"}
      maxH={["90vh", "65vh"]}
      overflow={"hidden"}
      mb={"10"}
    >
      <Modal isOpen={share} onClose={() => setShare(!share)} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton onClick={() => setShare(!share)} />
          <ModalBody>
            <SimpleGrid
              columns={4}
              gap={2}
              w="full"
              justifyItems={"space-between"}
            >
              <FacebookShareButton url={shareUrl.toString()}>
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>

              <TwitterShareButton url={shareUrl.toString()}>
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <WhatsappShareButton url={shareUrl.toString()}>
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>
              <RedditShareButton url={shareUrl.toString()}>
                <RedditIcon size={32} round={true} />
              </RedditShareButton>
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>

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
          <Image src={Dlinks} alt="Image" maxW="100%" maxH="100%" />

          <Icon
            as={FaShareAlt}
            fill={"white"}
            h={8}
            w={8}
            onClick={() => setShare(!share)}
          />
        </GridItem>
        <GridItem display={"flex"} flexDirection={"column"} px={[0, 5, 5, 10]}>
          <FullScreenImage
            containerStyles={{
              mb: 5,
              maxH: "60%",
            }}
            imageUrl={
              profile?.activeOnWeb3PassportofficialNFTImageUrl?.length! > 0
                ? (profile?.activeOnWeb3PassportofficialNFTImageUrl as string)
                : (passport as string)
            }
            imageStyles={{ objectFit: "cover", border: "2px solid white" }}
          />
          <SimpleGrid columns={2}>
            <Text color={"white"}>Citizen:</Text>
            <Text color={"white"}>{profile?.registeredDisplayName}</Text>
            <Text color={"white"}>
              Passport Ref:{profile?.activeOnWeb3PassportnftNumber}{" "}
            </Text>
            <Text as={"b"} color={"white"}>
              {profile?.activeOnWeb3PassportnftNumber}
            </Text>
            <Text color={"white"}>OnWeb3 Status: </Text>
            <Text color={"white"} as={"b"}>
              {profile?.statusOnWeb3}
            </Text>
          </SimpleGrid>
        </GridItem>
        <GridItem display={"flex"} flexDirection={"column"}>
          <FullScreenImage
            imageUrl={profile?.uploadedProfileImage ?? user}
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
  const [opacity, setOpacity] = useState(0.5);
  const { profile } = useContext(profileContext);

  const increaseOpacityByStep = () => {
    //increase opacity by step of 0.1 with mod
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
        profile={profile}
      />
      <ProfileHeaderLarge
        increaseOpacityByStep={increaseOpacityByStep}
        opacity={opacity}
        profile={profile}
      />
    </>
  );
};

export default ProfileHeader;
