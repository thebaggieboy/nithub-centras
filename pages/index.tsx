import { Inter } from "next/font/google";
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

import { DiVim } from "react-icons/di";
import { HeroSection } from "@/components/landing-page/sections/Hero";
import { FeatureSection } from "@/components/landing-page/sections/Features";
import { KeyServiceSection } from "@/components/landing-page/sections/KeyServices";
import { CentraSection } from "@/components/landing-page/sections/Centra";
import MobileDownload from "@/components/landing-page/sections/MobileDownload";
import Footer from "@/components/landing-page/sections/Footer";
const inter = Inter({ subsets: ["latin"] });

const Home: NextPageWithLayout = () => {
  return (
    <div className="font-satoshi">
      <HeroSection />
      <FeatureSection />
      <KeyServiceSection />
      <CentraSection />
      <MobileDownload />
      <Footer />
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <div>
      {page}
    </div>
  )
};

export default Home
