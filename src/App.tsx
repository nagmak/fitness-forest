import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  Heading,
  WrapItem,
  Avatar
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import TdeeCalculator from "./components/tdeeCalculator"
import { extendTheme, StyleFunctionProps } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import { radioAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys)

const buttonStyle = defineStyle({
  color: '#FAF1E6',
  background: '#064420',
  _dark: {
    background: '#84C69B',
    color: '#1A2F4B',
  }
})

const radioStyle = definePartsStyle({
  control: {
    borderColor: '#064420',
    _dark: {
      borderColor: '#84C69B',
    },
    _checked: {
      borderColor: '#84C69B',
      background: '#84C69B',
      _hover: {
        borderColor: '#84C69B',
        background: '#84C69B'
      },
      _dark: {
        borderColor: '#84C69B',
      },
    },
    _hover: {
      borderColor: '#84C69B',
      background: '#84C69B',
      _dark: {
        borderColor: '#84C69B',
      },
    }
  },
})

export const buttonTheme = defineStyleConfig({
  variants: { buttonStyle },
})

export const radioTheme = defineMultiStyleConfig({
  variants: { radioStyle }
})

const theme = extendTheme({
  colors: {
    forest: {
      50: "#064420",
      100: "#84C69B",
      200: "#FAF1E6",
      300: "#28475C",
      400: "#1A2F4B",
      500: "#FDFAF6",
      600: "#E4EFE7",
      700: "#064420",
      800: "#10004f",
      900: "#060020",
    },
  },
  components: {
    Heading: {
      baseStyle: (props: any) => ({
        color: mode(
          '#2F5D62', '#CEE5D0'
        )(props),
      }),
    },
    Button: buttonTheme,
    Radio: radioTheme,
  },
  fonts: {
    heading: `'Sen', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode('#064420', '#84C69B')(props),
        bg: mode('#FAF1E6', '#28475C')(props),
      },
    }),
  },
})

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
      <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
        <WrapItem>
              <Avatar size='2xl' name='Nagma Kapoor' src='profile.JPG' />
            </WrapItem>
        <Heading fontWeight="400">Welcome back, Nagma!</Heading>
          <TdeeCalculator/>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
