import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { profileContext } from "../../../../context/ProfileContext";
import QRCode from "qrcode.react";

const Web3AssetsWallets = () => {
  const { profile } = useContext(profileContext);
  const {
    solanaCryptoassetPublicID,
    bitcoinCryptoassetPublicID,
    ethereumCryptoassetPublicID,
    cosmosCryptoassetPublicID,
  } = profile;
  const textContent = [
    {
      blockchain: "Solana",
      address: solanaCryptoassetPublicID,
      qrCode: <QRCode value={solanaCryptoassetPublicID as string} />,
    },
    {
      blockchain: "Bitcoin",
      address: bitcoinCryptoassetPublicID,
      qrCode: <QRCode value={bitcoinCryptoassetPublicID as string} />,
    },
    {
      blockchain: "Ethereum",
      address: ethereumCryptoassetPublicID,
      qrCode: <QRCode value={ethereumCryptoassetPublicID as string} />,
    },
    {
      blockchain: "Cosmos",
      address: cosmosCryptoassetPublicID,
      qrCode: <QRCode value={cosmosCryptoassetPublicID as string} />,
    },
  ];
  console.log(textContent);
  return (
    <VStack alignItems={"flex-start"}>
      <Heading>Web3 Cryptoasset Wallets:</Heading>
      <SimpleGrid
        columns={[1, 1, 1, 3]}
        spacingY={[10]}
        w={"100%"}
        alignItems={"center"}
        fontWeight={"bold"}
        display={["none", "none", "none", "grid"]}
        mb={4}
      >
        {" "}
        <Text>Blockchain:</Text>
        <Text>Wallet Address:</Text>
        <Text placeSelf={["center", "center", "center", "start"]}>
          QR Code:
        </Text>
      </SimpleGrid>

      {textContent.map((item, index) => (
        <SimpleGrid
          columns={[1, 1, 1, 3]}
          spacingY={[5, 5, 10]}
          key={index}
          w={"100%"}
          alignItems={"center"}
        >
          <Text>{item.blockchain}</Text>
          <Text>{item.address}</Text>
          <Box>{item.qrCode}</Box>
          <hr />
        </SimpleGrid>
      ))}
    </VStack>
  );
};
export default Web3AssetsWallets;
