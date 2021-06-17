import React from 'react';
import NextLink from 'next/link';
import {
  Flex,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  Button
} from '@chakra-ui/react';

import { Logo } from '@/styles/theme';
import { useAuth } from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const auth = useAuth();
  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="white"
        justifyContent="space-between"
        alignItems="center"
        py={4}
        px={8}
      >
        <Stack spacing={4} isInline alignItems="center">
          <NextLink href="/" passHref>
            <Logo name="logo" w={6} h={6} />
          </NextLink>
          <NextLink href="/dashboard" passHref>
            <Link display="block">Sites</Link>
          </NextLink>
          <NextLink href="/feedback" passHref>
            <Link>Feedback</Link>
          </NextLink>
        </Stack>
        <Flex alignItems="center">
          {auth.user && (
            <Button variant="ghost" mr={2} onClick={() => auth.signout()}>
              Logout
            </Button>
          )}
          <Avatar size="sm" src={auth.user?.photoUrl} />
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="stretch"
        backgroundColor="gray.100"
        height="100vh"
      >
        <Flex flexDirection="column" p={8} height="0%">
          <Breadcrumb />
          <Flex
            maxWidth="800px"
            w="100%"
            ml="auto"
            mr="auto"
            direction="column"
          >
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
