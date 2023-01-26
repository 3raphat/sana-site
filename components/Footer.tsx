import { ReactNode } from 'react'
import NextLink from 'next/link'
import {
  Box,
  Container,
  createIcon,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

type ListHeaderProps = {
  children: ReactNode
}

const ListHeader = ({ children }: ListHeaderProps) => {
  return (
    <Text fontWeight={700} fontSize="lg" mb={2}>
      {children}
    </Text>
  )
}

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      pt={10}
      pb={20}
    >
      <Container maxW="7xl">
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '3fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <HStack spacing={2}>
              <Box rounded="full" bg="#10212b">
                <Icon
                  as={Sana}
                  boxSize={10}
                  color={useColorModeValue('gray.800', 'white')}
                />
              </Box>
              <Heading>Sana</Heading>
            </HStack>

            <Text>Music to your ears, anytime, anywhere with Sana!</Text>
            <Text>
              &copy; {new Date().getFullYear()} Sana. All Rights Reserved.
            </Text>
          </Stack>
          <Stack>
            <ListHeader>Product</ListHeader>
            <Link as={NextLink} href="/invite">
              Invite
            </Link>
            <Link as={NextLink} href="/commands">
              Commands
            </Link>
            <Link as={NextLink} href="/premium" target="_blank">
              Premium
            </Link>
          </Stack>
          <Stack>
            <ListHeader>Legal</ListHeader>
            <Link as={NextLink} href="/privacy">
              Privacy Policy
            </Link>
            <Link as={NextLink} href="/terms">
              Terms of Service
            </Link>
          </Stack>
          <Stack>
            <ListHeader>Support</ListHeader>
            <Link
              as={NextLink}
              href="https://discord.gg/tPAEqM3jAx"
              target="_blank"
            >
              Support Server
            </Link>
            <Link
              as={NextLink}
              href="https://discord.gg/tPAEqM3jAx"
              target="_blank"
            >
              Contact
            </Link>
          </Stack>
          <Stack>
            <ListHeader>Other</ListHeader>
            <Link as={NextLink} href="/about">
              About
            </Link>
            <Link as={NextLink} href="/guides">
              Guides
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

const Sana = createIcon({
  displayName: 'Sana',
  viewBox: '0 0 1024 1024',
  path: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
      <path
        d="M390.51,456A57.52,57.52,0,0,1,395.69,432l7-11c56.81-70.28,159.9-99.86,245.73-70.19C861,416.62,848.88,734.4,637,785.12c-24.4,5.84-50-5.85-60.57-28.59-.28-.62-.56-1.24-.83-1.87-12.46-29.3,4.18-62.9,34.82-71.61,50.38-14.32,88-61.08,87.86-116.52,2.14-89.46-98.17-147-173.92-109.5a54,54,0,0,0-24.4,25C475.19,533.25,390.75,518.8,390.51,456Z"
        fill="#fff"
      />
      <path
        d="M633.49,568.05a57.52,57.52,0,0,1-5.18,24l-7,11c-56.81,70.28-159.9,99.86-245.73,70.19C163,607.38,175.12,289.6,387,238.88c24.4-5.84,50,5.85,60.57,28.59.28.62.56,1.24.83,1.87,12.46,29.3-4.18,62.9-34.82,71.61-50.38,14.32-88,61.08-87.86,116.52-2.14,89.46,98.17,147,173.92,109.5a54,54,0,0,0,24.4-25C548.81,490.75,633.25,505.2,633.49,568.05Z"
        fill="#ff1493"
      />
    </svg>
  ),
})

export default Footer
