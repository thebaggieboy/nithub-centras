import "@/styles/globals.css";
import type { ReactElement, ReactNode } from 'react'
import type { AppProps } from "next/app";
import type { NextPage } from 'next'
import { ChakraProvider } from '@chakra-ui/react'

import Layout from "../components/Layout"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

  return (
    <ChakraProvider>
      { getLayout(<Component {...pageProps} />) }
    </ChakraProvider>
  )
}
