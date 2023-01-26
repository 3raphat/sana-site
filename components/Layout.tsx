import { Box, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Sana - The Discord Music Bot</title>
        <meta name="title" content="Sana - The Discord Music Bot" />
        <meta
          name="description"
          content="Sana is the Discord music bot that does more than just play music! Invite Sana today and enjoy a good day by the melody with your friends or community!"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sanabot.ml/" />
        <meta property="og:title" content="Sana - The Discord Music Bot" />
        <meta
          property="og:description"
          content="Sana is the Discord music bot that does more than just play music! Invite Sana today and enjoy a good day by the melody with your friends or community!"
        />
        <meta property="og:image" content="/assets/sana.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sanabot.ml/" />
        <meta property="twitter:title" content="Sana - The Discord Music Bot" />
        <meta
          property="twitter:description"
          content="Sana is the Discord music bot that does more than just play music! Invite Sana today and enjoy a good day by the melody with your friends or community!"
        />
        <meta property="twitter:image" content="/assets/sana.png" />
      </Head>
      <Flex direction="column" minH="100vh">
        <Navbar />
        <Box flexGrow={1}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        </Box>
        <Footer />
      </Flex>
    </>
  )
}
