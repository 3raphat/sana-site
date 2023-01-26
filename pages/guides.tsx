import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import Layout from '../components/Layout'
import NextLink from 'next/link'
import { ArrowBackIcon } from '@chakra-ui/icons'

export default function Guides() {
  return (
    <Layout>
      <Container maxW="7xl" py={32}>
        <VStack spacing={8}>
          <Heading>Coming Soon! มั้ง</Heading>
          <Button as={NextLink} href="/" leftIcon={<ArrowBackIcon />}>
            Return to Home
          </Button>
        </VStack>
      </Container>
    </Layout>
  )
}
