import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import blueBubble from "@/assets/images/blueBubble.png";
import greenBubble from "@/assets/images/greenBubble.png";
import pinkBubble from "@/assets/images/pinkBubble.png";
import redBubble from "@/assets/images/redBubble.png";
import goldenBubble from "@/assets/images/goldenBubble.png";
interface Link {
  label: string;
  content: string;
  image: string;
}

const links: Link[] = [
  {
    label: "Biographic Link:",
    content: "https://linkedin.com/alemakuchi",
    image: blueBubble,
  },
  {
    label: "Social Link 1:",
    content: "https://twitter.com/alemakuchi",
    image: redBubble,
  },
  {
    label: "Social Link 2:",
    content: "https://youtube.com/alemakuchi",
    image: goldenBubble,
  },
  {
    label: "Social Link 3:",
    content: "https://instagram.com/alemakuchi",
    image: greenBubble,
  },
  {
    label: "Social Link 4:",
    content: "https://discord.com/alemakuchi",
    image: pinkBubble,
  },
];
const SocialLinks = () => {
  return (
    <VStack align={"flex-start"}>
      {links.map((link, index) => (
        <a href={link.content} key={index}>
          <HStack key={index} spacing={4}>
            <Image
              h={[10, 10, 20]}
              w={[10, 10, 20]}
              src={link.image}
              alt={link.label}
            />
            <VStack align={"flex-start"}>
              <Text>{link.label}</Text>
              <a href={link.content}>{link.content}</a>
            </VStack>
          </HStack>
        </a>
      ))}
    </VStack>
  );
};

export default SocialLinks;
