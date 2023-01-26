import { CheckIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

type FeaturesItem = {
  title: string
  text: string
}

const FEATURES: Array<FeaturesItem> = [
  {
    title: 'High Quality Music',
    text: 'Stream your audio in the best possible quality!',
  },
  {
    title: 'Music Playback',
    text: 'Play any track or playlist on demand',
  },
  {
    title: 'Ultimate Control',
    text: 'Adjust volume and control playback',
  },
  {
    title: 'Multiple Platform',
    text: 'Support for multiple music sources',
  },
]

const Features = () => {
  return (
    <Box>
      <Container maxW="7xl" py={{ base: 20, md: 32 }}>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading mb={8}>Feature-rich command</Heading>
              <Text>
                Sana is a feature-rich Discord bot with a wide range of commands
                and capabilities. You can learn more about these commands on the
                commands page
              </Text>
              <SimpleGrid columns={2} spacing={8} mt={8}>
                {FEATURES.map((feature, index) => (
                  <HStack key={feature.title} align="start">
                    <Box color="green.400" px={2}>
                      <Icon as={CheckIcon} />
                    </Box>
                    <VStack align="start">
                      <Text fontWeight="700">{feature.title}</Text>
                      <Text color="gray.500">{feature.text}</Text>
                    </VStack>
                  </HStack>
                ))}
              </SimpleGrid>
            </Box>
            <Flex align="center" justify={{ base: 'center', md: 'flex-end' }}>
              <Image
                src="/assets/play.png"
                alt="play"
                objectFit="cover"
                borderRadius="lg"
                shadow="xl"
                _hover={{ scale: 110 }}
              />
            </Flex>
          </SimpleGrid>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Features
