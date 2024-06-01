import { useState, useRef } from "react";
import { Container, Box, Text, VStack, HStack, Button, IconButton, Flex, useToast, Heading } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const fileInputRef = useRef(null);
  const toast = useToast();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        setUploadStatus("uploading");
        // Simulate file upload
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second upload time

        setUploadStatus("success");
        toast({
          title: "File uploaded successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-middle", // Change this line
        });
      } catch (error) {
        setUploadStatus("error");
        toast({
          title: "File upload failed.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-middle", // Change this line
        });
      }
    }
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
              <Flex justifyContent="space-between" alignItems="center">
                <Heading as="h1" size="lg">learning-extractor</Heading>
                <Flex justifyContent="flex-end">
                  <Button leftIcon={<FaUpload />} colorScheme="blue" size="lg" onClick={handleUploadClick} isLoading={uploadStatus === "uploading"}>
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
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
      <HStack spacing={4} justifyContent="center" alignItems="flex-start" flex="1" p={4}>
        <Box width="45%" bg="gray.50" p={4} boxShadow="md" borderRadius="md" minHeight="50vh" maxHeight="50vh" overflowY="scroll">
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Educational Text
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
        <Box width="45%" bg="gray.50" p={4} boxShadow="md" borderRadius="md" minHeight="50vh">
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