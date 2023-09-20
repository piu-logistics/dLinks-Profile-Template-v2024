import { Text, VStack } from "@chakra-ui/react";
const textContent = [
  {
    title: "Chat Name:",
    content: "@alemakuchi:alkebulanmeta.network",
    type: "text",
  },
  {
    title: "Display Name:",
    content: "1st Gen 30",
    type: "text",
  },
  {
    title: "dLinks Profile URL (public link):",
    content: "https://alemakuchi.techbio.ow3.info",
    type: "link",
  },
];
const Identity = () => {
  return (
    <VStack alignItems={"flex-start"}>
      {textContent.map((item, index) => (
        <>
          <Text key={index}>{item.title} </Text>
          <Text as="b">
            {item.type === "link" ? (
              <a href={item.content} target="_blank">
                {item.content}
              </a>
            ) : (
              item.content
            )}
          </Text>
        </>
      ))}
    </VStack>
  );
};
export default Identity;
