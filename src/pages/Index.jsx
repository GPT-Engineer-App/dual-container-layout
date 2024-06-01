import { useState, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Container, Box, Text, VStack, HStack, Button, IconButton, Flex, useToast, Heading, Input } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const fileInputRef = useRef(null);
  const [essenceText, setEssenceText] = useState("");

  const handleSendEssenceText = () => {
    // Logic to handle sending the essence text
    console.log("Essence text sent:", essenceText);
  };
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
        <Box width="45%" bg="gray.50" p={4} boxShadow="md" borderRadius="md" minHeight="50vh">
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Educational Text
          </Text>
          {/* Content for the left container */}
        </Box>
        <Box width="45%" bg="gray.50" p={4} boxShadow="md" borderRadius="md" minHeight="50vh">
          <VStack spacing={4}>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Essence
            </Text>
            <HStack width="100%">
              <Input
                placeholder="Type your text here..."
                value={essenceText}
                onChange={(e) => setEssenceText(e.target.value)}
              />
              <IconButton
                icon={<FaPaperPlane />}
                colorScheme="blue"
                onClick={handleSendEssenceText}
              />
            </HStack>
          </VStack>
        </Box>
      </HStack>
    </Container>
  );
};

export default Index;