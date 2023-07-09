import { Box, Button, Heading, Input } from '@chakra-ui/react';

export default function UploadPage() {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // ファイルの処理を行う
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4}>
      <Heading as="h1" size="lg" mb={4}>
        Upload Image
      </Heading>

      <Input type="file" onChange={handleFileChange} mb={4} />

      <Button colorScheme="teal" size="md">
        Upload
      </Button>
    </Box>
  );
}
