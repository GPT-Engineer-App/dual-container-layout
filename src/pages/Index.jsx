import { Container, Box, Text, VStack, HStack, Button, IconButton, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    // Replace the URL with your actual file upload endpoint
    fetch("https://your-upload-endpoint.com/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("File uploaded successfully:", data);
        alert("File uploaded successfully!");
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        alert("Error uploading file. Please try again.");
      });
  };

  return (
    <Container maxW="container.xl" height="100vh" display="flex" flexDirection="column" p={0}>
      <Box as="nav" width="100%" bg="gray.100" p={4} boxShadow="md">
        <Flex justifyContent="flex-end">
          <input
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="fileInput"
          />
          <Button
            leftIcon={<FaUpload />}
            colorScheme="blue"
            size="lg"
            onClick={() => document.getElementById("fileInput").click()}
          >
            Select File
          </Button>
          <Button
            colorScheme="green"
            size="lg"
            ml={4}
            onClick={handleFileUpload}
          >
            Upload File
          </Button>
        </Flex>
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