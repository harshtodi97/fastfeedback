import Head from 'next/head'
import { Button, Flex, Link, Stack} from '@chakra-ui/react';


import { useAuth } from '@/lib/auth';
import { Logo, GitHubLogo, GoogleLogo } from '@/styles/theme';

const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
                window.location.href = "/dashboard"
              }
            `
          }}
        />
        <title>Fast Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Logo name="logo" w={12} h={12} mb={8} />

      {auth.user ? (
        <Button
          as="a"
          href="/dashboard"
          backgroundColor="white"
          color="gray.900"
          variant="outline"
          size="md"
          fontWeight="medium"
          _hover={{ bg: 'gray.100' }}
          _active={{
            bg: 'gray.100',
            transform: 'scale(0.95)'
          }}
              >
              View Dashboard
        </Button>
          
      ) : (
        <Stack>
          <Button
            leftIcon={<GitHubLogo />}
            onClick={(e) => auth.signinWithGitHub()}
            backgroundColor="gray.900"
            color="white"
            size="md"
            fontWeight="medium"
            _hover={{ bg: 'gray.700' }}
            _active={{
              bg: 'gray.800',
              transform: 'scale(0.95)'
            }}
          >
            Sign In With GitHub
          </Button>
          <Button
            leftIcon={<GoogleLogo />}
            onClick={(e) => auth.signinWithGoogle()}
            backgroundColor="white"
              color="gray.900"
              variant="outline"
            size="md"
            fontWeight="medium"
            _hover={{ bg: 'gray.100' }}
            _active={{
              bg: 'gray.100',
              transform: 'scale(0.95)'
            }}
          >
            Sign In With Google
          </Button>
        </Stack>
  )
}
    </Flex>
  );
};

export default Home;