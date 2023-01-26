import {
  Box,
  Card,
  CardBody,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import Layout from '../components/Layout'

const TEAMS = [
  {
    team: 'Development Team',
    desc: 'The important person to Sana',
    member: [
      {
        name: 'ahnnee',
        role: 'Project Lead',
      },
      {
        name: 'ahnnee *wink*',
        role: 'Chief Engineer',
      },
      {
        name: 'ahnneeya~',
        role: 'Support Lead',
      },
      {
        name: 'Music 🎵',
        role: 'Make me happy :)',
      },
    ],
  },
  {
    team: 'Server Staff',
    desc: "The staff of Sana's official server",
    member: [
      {
        name: 'ahnnee again',
        role: 'Moderator, Support',
      },
      {
        name: 'Ari>',
        role: 'Moderator',
      },
      {
        name: 'ยืด',
        role: 'Support',
      },
    ],
  },
]

type MemberProps = {
  name: string
  role: string
}

type TeamProps = {
  team: string
  desc?: string
  member: Array<MemberProps>
}

const CardItem = ({ name, role }: MemberProps) => {
  return (
    <Card variant="outline">
      <CardBody>
        <Text fontSize="lg" fontWeight={700} mb={1}>
          {name}
        </Text>
        <Text>{role}</Text>
      </CardBody>
    </Card>
  )
}

const TeamSession = ({ team, desc, member }: TeamProps) => {
  return (
    <Stack mt={12}>
      <Box mb={2}>
        <Heading variant="sub-heading">{team}</Heading>
        <Text mt={2}>{desc}</Text>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4}>
        {member.map((member) => (
          <CardItem key={member.name} name={member.name} role={member.role} />
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export default function About() {
  return (
    <Layout>
      <Container maxW="7xl" py={32}>
        <Heading>Meet the people behind Sana</Heading>

        {TEAMS.map((x) => (
          <TeamSession
            key={x.team}
            team={x.team}
            desc={x.desc}
            member={x.member}
          />
        ))}
      </Container>
    </Layout>
  )
}
