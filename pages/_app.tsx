import { ChakraProvider } from '@chakra-ui/react'
import localFont from '@next/font/local'
import type { AppProps } from 'next/app'
import theme from '../styles/theme'
import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'

const font = localFont({
  src: [
    {
      path: '../fonts/LINESeedSansTH_W_Th.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/LINESeedSansTH_W_Rg.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/LINESeedSansTH_W_Bd.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/LINESeedSansTH_W_XBd.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/LINESeedSansTH_W_He.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence >
        <main className={font.className}>
          <Component {...pageProps} />
          <Analytics />
        </main>
      </AnimatePresence>
    </ChakraProvider>
  )
}
