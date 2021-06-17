import React from 'react';
import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius={8}
      flexDirection="column"
      alignItems="flex-start"
      p={8}
    >
      <Heading size="md" as="h2">
        Get feedback on your site instantly.
      </Heading>
      <Text>Start today, then grow with us.</Text>
      <Button variant="solid" size="md" display="flex">
        Upgrade to Starter
      </Button>
    </Flex>
  </DashboardShell>
);

export default FreePlanEmptyState;
