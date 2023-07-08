import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

export default function LoginPage() {
  return (
    <Box maxW="md" mx="auto" mt={8} p={4}>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="Enter your email" />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Enter your password" />
      </FormControl>

      <Stack mt={4} direction="row" spacing={4}>
        <Button colorScheme="teal" size="md">
          Sign In
        </Button>
        <Button colorScheme="gray" size="md">
          Sign Up
        </Button>
      </Stack>
    </Box>
  );
}
