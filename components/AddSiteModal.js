import { useRef } from 'react';
import { mutate } from 'swr';
import { useForm } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  FormControl,
  Input,
  useToast,
  Button,
  useDisclosure
} from '@chakra-ui/react';
import { createSite } from '@/lib/db';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';

const AddSiteModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const auth = useAuth();
  const initialRef = useRef();

  const { register, handleSubmit } = useForm();

  const onCreateSite = ({ name, url }) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      url
    };

    const { id } = createSite(newSite);
    toast({
      title: 'Success!',
      description: "We've added your site.",
      status: 'success',
      duration: 3000,
      isClosable: true
    });
    mutate(
      ['/api/sites', auth.user.token],
      async (data) => ({ sites: [...data.sites, { id, ...newSite }] }),
      false
    );
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        {children}
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="My site"
                {...register('name', { required: true })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="htpps://website.com"
                {...register('url', { required: true })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              backgroundColor="#99FFFE"
              color="#194D4C"
              mr={3}
              fontWeight="medium"
              type="submit"
            >
              Create
            </Button>
            <Button onClick={onClose} fontWeight="medium">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
