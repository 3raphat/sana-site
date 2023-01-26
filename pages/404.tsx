import { Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import Layout from '../components/Layout'
import NextLink from 'next/link'
import { ArrowBackIcon } from '@chakra-ui/icons'

export default function NotFound() {
  return (
    <Layout>
      <Container maxW="7xl" py={32}>
        <VStack spacing={6}>
          <Heading fontSize='8xl' fontWeight={800}>404</Heading>
          <Heading variant='sub-heading'>Page Not Found!</Heading>
          <Text>Sorry, the page you are looking for could not be found</Text>
          <Button as={NextLink} href="/" leftIcon={<ArrowBackIcon />}>
            Return to Home
          </Button>
        </VStack>
      </Container>
    </Layout>
  )
}
