import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  createIcon,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  LinkProps,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ReactNode } from 'react'
import ToggleThemeButton from './ToggleThemeButton'

type NavItem = {
  label: string
  href: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Commands',
    href: '/commands',
  },
  {
    label: 'Support',
    href: '/support',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Guides',
    href: '/guides',
  },
  {
    label: 'Premium',
    href: '/premium',
  },
]

type LinkItemProps = {
  children: ReactNode
  href: string
  target?: string
}

const LinkItem = ({
  children,
  href,
  target,
  ...props
}: LinkItemProps & LinkProps) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  return (
    <Link
      as={NextLink}
      href={href}
      target={target}
      color={linkColor}
      p={2}
      fontSize="sm"
      _hover={{ color: linkHoverColor, textDecoration: 'none' }}
      {...props}
    >
      {children}
    </Link>
  )
}

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
      position="fixed"
      as="nav"
      w="full"
      minH="60px"
      bg={useColorModeValue('white', 'gray.800')}
      py={3}
      px={6}
      zIndex={2}
    >
      <Flex justify="space-between" align="center">
        <HStack spacing={8}>
          <NextLink href="/">
            <Icon
              as={Sana}
              boxSize="48px"
              color={useColorModeValue('gray.800', 'white')}
            />
          </NextLink>
          <Flex display={{ base: 'none', md: 'flex' }} gap={8}>
            {NAV_ITEMS.map((item) => (
              <LinkItem key={item.label} href={item.href}>
                {item.label}
              </LinkItem>
            ))}
          </Flex>
        </HStack>

        <HStack spacing={4}>
          <ToggleThemeButton />

          <Box display={{ base: 'block', md: 'none' }}>
            <IconButton
              onClick={onOpen}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              aria-label="Toggle Navigation"
            />
          </Box>

          <Box display={{ base: 'none', md: 'block' }}>
            <Button
              as={NextLink}
              href="/invite"
              fontSize="sm"
              color="white"
              bg="pink.400"
              _hover={{ bg: 'pink.300' }}
              colorScheme="pink"
            >
              Invite Sana
            </Button>
          </Box>

          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bg={useColorModeValue('white', 'gray.800')}>
              <DrawerCloseButton />
              <DrawerBody>
                <VStack h="100%" align="center" justify="center" spacing={10}>
                  {NAV_ITEMS.map((item) => (
                    <LinkItem key={item.label} href={item.href} fontSize="md">
                      {item.label}
                    </LinkItem>
                  ))}

                  <Divider />

                  <HStack
                    alignItems="center"
                    justifyContent="center"
                    spacing={4}
                  >
                    <ToggleThemeButton />

                    <Button
                      as={NextLink}
                      href="/invite"
                      color="white"
                      bg="pink.400"
                      _hover={{ bg: 'pink.300' }}
                      colorScheme="pink"
                    >
                      Invite Sana
                    </Button>
                  </HStack>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </HStack>
      </Flex>
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
        fill="currentColor"
      />
      <path
        d="M633.49,568.05a57.52,57.52,0,0,1-5.18,24l-7,11c-56.81,70.28-159.9,99.86-245.73,70.19C163,607.38,175.12,289.6,387,238.88c24.4-5.84,50,5.85,60.57,28.59.28.62.56,1.24.83,1.87,12.46,29.3-4.18,62.9-34.82,71.61-50.38,14.32-88,61.08-87.86,116.52-2.14,89.46,98.17,147,173.92,109.5a54,54,0,0,0,24.4-25C548.81,490.75,633.25,505.2,633.49,568.05Z"
        fill="currentColor"
      />
    </svg>
  ),
})

export default Navbar
