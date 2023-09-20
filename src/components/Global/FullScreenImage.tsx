import { useState } from "react";
import {
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  BoxProps,
} from "@chakra-ui/react";
interface FullScreenImageProps {
  imageUrl: string;
  imageStyles?: any;
  containerStyles?: BoxProps;
}
const FullScreenImage = ({
  imageUrl,
  imageStyles,
  containerStyles,
}: FullScreenImageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Box onClick={openModal} cursor="pointer" {...containerStyles}>
        <Image
          src={imageUrl}
          {...imageStyles}
          alt="Image"
          maxW="100%"
          maxH="100%"
        />
      </Box>

      <Modal isOpen={isModalOpen} onClose={closeModal} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={imageUrl}
              alt="Full Screen Image"
              maxW="100%"
              maxH="100vh"
              mx={"auto"}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FullScreenImage;
