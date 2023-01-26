import { Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import Layout from '../components/Layout'
import NextLink from 'next/link'
import { ArrowBackIcon } from '@chakra-ui/icons'

export default function ServerError() {
  return (
    <Layout>
      <Container maxW="7xl" py={32}>
        <VStack spacing={6}>
          <Heading fontSize='8xl' fontWeight={800}>505</Heading>
          <Heading variant='sub-heading'>Server-side error occurred!</Heading>
          <Text>Sorry, something went technically wrong</Text>
          <Button as={NextLink} href="/" leftIcon={<ArrowBackIcon />}>
            Return to Home
          </Button>
        </VStack>
      </Container>
    </Layout>
  )
}
