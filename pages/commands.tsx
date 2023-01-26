/* eslint-disable react-hooks/rules-of-hooks */
import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Code,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Layout from '../components/Layout'
import { useState } from 'react'
import commandData from '../data/commands.json'

type CommandItemProps = {
  command: any
}

const CommandItem = ({ command }: CommandItemProps) => {
  return (
    <Card variant="outline">
      <CardBody>
        <Code colorScheme="cyan">/{command.title}</Code>
        <Text
          mt={2}
          color={useColorModeValue('blackAlpha.800', 'whiteAlpha.700')}
        >
          {command.desc}
        </Text>
      </CardBody>
      <CardFooter justify="end">
        <Badge colorScheme="pink">{command.cat}</Badge>
      </CardFooter>
    </Card>
  )
}

export default function Commands() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  const CategoryList = [
    { label: 'All', value: 'all' },
    { label: 'Music', value: 'music' },
    { label: 'Admin', value: 'admin' },
    { label: 'Info', value: 'info' },
    { label: 'Fun', value: 'fun' },
    { label: 'Filter', value: 'filter' },
  ]

  const commandFiltered = commandData
    .sort((a, b) => a.title.localeCompare(b.title))
    .filter((c) => {
      return (
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.desc.toLowerCase().includes(search.toLowerCase())
      )
    })
    .map((command, i) => {
      if (category === 'all') {
        return <CommandItem key={i} command={command} />
      } else if (command.cat === category) {
        return <CommandItem key={i} command={command} />
      }
    })

  return (
    <Layout>
      <Container maxW="7xl" py={32}>
        <Heading mb={2}>All Commands of Sana</Heading>
        <Text>Hey there, your help has arrived! 🚀</Text>

        <Input
          my={8}
          placeholder="Look up the command"
          size="lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Stack spacing={8}>
          <Flex gap={4} wrap="wrap">
            {CategoryList.map((tag) => (
              <Tag
                key={tag.label}
                onClick={() => setCategory(tag.value)}
                bg={
                  tag.value === category
                    ? useColorModeValue('pink.200', 'pink.600')
                    : useColorModeValue('blackAlpha.200', 'whiteAlpha.100')
                }
                size="lg"
                px={6}
                py={3}
                _hover={{ cursor: 'pointer' }}
              >
                {tag.label}
              </Tag>
            ))}
          </Flex>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4}>
            {commandFiltered}
          </SimpleGrid>
        </Stack>
      </Container>
    </Layout>
  )
}
