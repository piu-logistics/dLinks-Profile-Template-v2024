import { Box, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { profileContext } from "../../../../context/ProfileContext";

const Identity = () => {
  const { profile } = useContext(profileContext);
  const { registeredDisplayName, preferredUsername, hTLDPreference } = profile;
  const chatName = `@${preferredUsername}:alkebulanmeta.network`;
  const dLinksProfileURL = `https://${preferredUsername}.${hTLDPreference}.ow3.info`;

  const textContent = [
    {
      title: "Chat Name:",
      type: "text",
      content: chatName,
    },
    {
      title: "Display Name:",
      type: "text",
      content: registeredDisplayName,
    },
    {
      title: "dLinks Profile URL (public link):",
      type: "link",
      content: dLinksProfileURL,
    },
  ];
  return (
    <VStack alignItems={"flex-start"}>
      {textContent.map((item, index) => (
        <Box mb={6}>
          <Text key={index}>{item.title} </Text>
          <Text as="b">
            {item.type === "link" ? (
              <a href={item.content as string} target="_blank">
                {item.content}
              </a>
            ) : (
              item.content
            )}
          </Text>
        </Box>
      ))}
    </VStack>
  );
};
export default Identity;
