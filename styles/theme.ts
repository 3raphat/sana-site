import {
  Colors,
  extendTheme,
  ThemeConfig,
} from '@chakra-ui/react'

const components = {
  Heading: {
    baseStyle: {
      fontFamily: '',
      fontWeight: '700',
    },
    variants: {
      'sub-heading': {
        fontSize: '2xl',
      },
    },
  },
  Link: {
    baseStyle: {
      textUnderlineOffset: 2,
    },
  },
}

const styles = {
  global: (props: any) => ({
    '&::-webkit-scrollbar': {
      w: '3',
      bg: 'blackAlpha.100',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 'full',
      bg: 'pink.400',
    },
    'html, body': {
      fontSize: { base: 'sm', md: 'md' },
      bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
    },
  }),
}

const colors: Colors = {
  primary: {
    100: '#ff5bb3',
    200: '#ff43a9',
    300: '#ff2c9e',
    400: '#ff1493',
    500: '#e61284',
    600: '#cc1076',
    700: '#b30e67',
    800: '#990c58',
    900: '#800a4a',
  },
  secondary: {
    100: '#5bffa6',
    200: '#43ff99',
    300: '#2cff8d',
    400: '#14ff80',
    500: '#12e673',
    600: '#10cc66',
    700: '#0eb35a',
    800: '#0c994d',
    900: '#0a8040',
  },
}

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const theme = extendTheme({ config, colors, components, styles })
export default theme
