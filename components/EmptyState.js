import React from 'react';
import { Flex, Heading, Text, Button } from '@chakra-ui/react';

import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
  <Flex
    width="100%"
    backgroundColor="white"
    borderRadius={8}
    flexDirection="column"
    alignItems="center"
    justify="center"
    p={16}
  >
    <Heading size="lg" as="h2" mb={2}>
      You haven't added any sites
    </Heading>
    <Text mb={4}>Welcome! Let's get started.</Text>
    <AddSiteModal>Add Your First Site</AddSiteModal>
  </Flex>
);

export default EmptyState;
