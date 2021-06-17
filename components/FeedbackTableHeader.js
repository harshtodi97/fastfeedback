import React from 'react';
import {
  Flex,
  Breadcrumb,
  Heading,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react';

const FeedbackTableHeader = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink color="gray.700" fontSize="sm">
          Feedback
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between">
      <Heading color="black" mb={4}>
        My Feedback
      </Heading>
    </Flex>
  </>
);

export default FeedbackTableHeader;
