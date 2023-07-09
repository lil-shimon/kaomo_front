import Link from 'next/link';
import { Box, Heading } from '@chakra-ui/react';

export default function HomePage() {
  return (
    <Box maxW="md" mx="auto" mt={8} p={4}>
      <Heading as="h1" size="lg" mb={4}>
        Welcome to the Likeness Detector App!
      </Heading>

      <Link href="/upload">
        <div>Go to Upload</div>
      </Link>
    </Box>
  );
}
