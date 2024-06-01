import { useState, useRef } from "react";
import { Container, Box, Text, VStack, HStack, Button, IconButton, Flex } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Container maxW="container.xl" height="100vh" display="flex" flexDirection="column" p={0}>
      <Box id="navbar-container" width="100%" mx="auto" display="flex" alignItems="center">
        <Box as="nav" width="100%" bg="gray.100" p={4} boxShadow="md">
          <Flex justifyContent="center">
            <Box id="nav_content" width="90%">
              <Flex justifyContent="flex-end">
                <Button leftIcon={<FaUpload />} colorScheme="blue" size="lg" onClick={handleUploadClick}>
                  Upload Document
                </Button>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                {selectedFile && (
                  <Text mt={2}>Selected file: {selectedFile.name}</Text>
                )}
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
      <HStack spacing={4} justifyContent="center" alignItems="flex-start" flex="1" p={4}>
        <Box width="45%" bg="gray.50" p={4} boxShadow="md" borderRadius="md">
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Educational Text
          </Text>
          {/* Content for the left container */}
        </Box>
        <Box width="45%" bg="gray.50" p={4} boxShadow="md" borderRadius="md">
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Essence
          </Text>
          {/* Content for the right container */}
        </Box>
      </HStack>
    </Container>
  );
};

export default Index;