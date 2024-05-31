import { Container, Box, Text, VStack, HStack, Button, IconButton, Flex } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" height="100vh" display="flex" flexDirection="column" p={0}>
      <Box as="nav" width="100%" bg="gray.100" p={4} boxShadow="md">
        <Flex justifyContent="flex-end">
          <Button leftIcon={<FaUpload />} colorScheme="blue" size="lg">
            Upload Document
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