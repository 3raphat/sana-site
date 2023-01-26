/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { TextUnderline } from './TextUnderline'

const STEPS = [
  {
    title: 'Invite to your Discord server',
    text: 'In order to use the bot, you will need to invite Sana to your server using the invite button.',
  },
  {
    title: 'Play the music',
    text: 'Join the desired voice channel and you can type the /play followed by the name of the track or artist that they want to play.',
  },
  {
    title: 'Enjoy your music!',
    text: 'Congratulations! your done.',
  },
]

const GetStarted = () => {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="7xl" py={{ base: 20, md: 32 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
        >
          <Heading textAlign="center" mb={{ base: 14, sm: 16 }}>
            Getting started in <TextUnderline>3 easy steps</TextUnderline>
          </Heading>
        </motion.div>
        <Flex
          as={motion.div}
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          gap={8}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
          }}
        >
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeIn' }}
            >
              <Stack
                key={index}
                textAlign={{ base: 'left', md: 'center' }}
                align={{ base: 'flex-start', md: 'center' }}
                spacing={4}
                maxW={{ base: 'full', md: 'xs' }}
                mt={{ base: 10, md: 0 }}
                px={4}
                _first={{
                  mt: 0,
                }}
              >
                <Flex
                  w={10}
                  h={10}
                  bg={useColorModeValue('pink.100', 'pink.900')}
                  color={useColorModeValue('pink.700', 'pink.300')}
                  fontWeight="700"
                  align="center"
                  justify="center"
                  fontSize="sm"
                  rounded="md"
                >
                  0{index + 1}
                </Flex>
                <Text
                  fontSize="xl"
                  color={useColorModeValue('gray.700', 'white')}
                >
                  {step.title}
                </Text>
                <Text color="gray.500">{step.text}</Text>
              </Stack>
            </motion.div>
          ))}
        </Flex>
      </Container>
    </Box>
  )
}

export default GetStarted
