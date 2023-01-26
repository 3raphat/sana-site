import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { motion } from 'framer-motion'

const ReadyToStarted = () => {
  return (
    <Box>
      <Container maxW="7xl" py={{ base: 20, md: 32 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
        >
          <Box
            bg={useColorModeValue('pink.400', 'pink.500')}
            color={useColorModeValue('white', 'gray.100')}
            rounded="xl"
            px={{ base: 4, md: 10 }}
            py={10}
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Box textAlign={{ base: 'center', md: 'left' }}>
                <Heading mb={2}>Ready to Get Started?</Heading>
                <Text fontSize="lg">
                  Don&apos;t hesitate to invite and get all the features on your
                  server!
                </Text>
              </Box>
              <Flex align="center" justify={{ base: 'center', md: 'end' }}>
                <Button
                  as={NextLink}
                  href="/invite"
                  rightIcon={<ChevronRightIcon />}
                  px={8}
                  size="lg"
                  fontSize="md"
                  color="white"
                  bg="pink.600"
                  colorScheme="pink"
                  _hover={{ bg: 'pink.700' }}
                >
                  Invite Now
                </Button>
              </Flex>
            </SimpleGrid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default ReadyToStarted
