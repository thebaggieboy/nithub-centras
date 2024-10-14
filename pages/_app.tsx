import "@/styles/globals.css";
import type { ReactElement, ReactNode } from 'react'
import type { AppProps } from "next/app";
import type { NextPage } from 'next'
import { ChakraProvider } from '@chakra-ui/react'

import Layout from "../components/Layout"
import Head from "next/head";

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
      <Head>
        <title>Centra</title>
        <meta name="description" content="Centra simplifies business management by integrating CRM and inventory solutions, empowering businesses to streamline operations and drive growth." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer"></link>
      </Head>
      { getLayout(<Component {...pageProps} />) }
    </ChakraProvider>
  )
}
