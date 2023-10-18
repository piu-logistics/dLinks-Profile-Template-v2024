import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import blueBubble from "@/assets/images/blueBubble.png";
import greenBubble from "@/assets/images/greenBubble.png";
import pinkBubble from "@/assets/images/pinkBubble.png";
import redBubble from "@/assets/images/redBubble.png";
import goldenBubble from "@/assets/images/goldenBubble.png";
import { useContext } from "react";
import { profileContext } from "../../context/ProfileContext";
interface Link {
  label: string;
  content?: string | null | undefined;
  image: string;
}

const SocialLinks = () => {
  const { profile } = useContext(profileContext);
  const {
    socialLink01,
    socialLink02,
    socialLink03,
    socialLink04,
    urlBiographic,
  } = profile;
  const links: Link[] = [
    {
      label: "Biographic Link:",
      content: urlBiographic,
      image: blueBubble,
    },
    {
      label: "Social Link 1:",
      content: socialLink01,
      image: redBubble,
    },
    {
      label: "Social Link 2:",
      content: socialLink02,
      image: goldenBubble,
    },
    {
      label: "Social Link 3:",
      content: socialLink03,
      image: greenBubble,
    },
    {
      label: "Social Link 4:",
      content: socialLink04,
      image: pinkBubble,
    },
  ];

  return (
    <VStack align={"flex-start"}>
      {links.map((link, index) => (
        <a href={link.content as string} key={index}>
          <HStack key={index} spacing={4}>
            <Image
              h={[10, 10, 20]}
              w={[10, 10, 20]}
              src={link.image}
              alt={link.label}
            />
            <VStack align={"flex-start"}>
              <Text>{link.label}</Text>
              <a href={link.content as string}>{link.content}</a>
            </VStack>
          </HStack>
        </a>
      ))}
    </VStack>
  );
};

export default SocialLinks;
