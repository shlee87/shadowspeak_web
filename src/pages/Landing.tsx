import Hero from '../components/Hero'
import Problem from '../components/Problem'
import FounderStory from '../components/FounderStory'
import Solution from '../components/Solution'
import HowItWorks from '../components/HowItWorks'
import Faq from '../components/Faq'
import EarlyAccess from '../components/EarlyAccess'

function Landing() {
  return (
    <>
      <Hero />
      <Problem />
      <FounderStory />
      <Solution />
      <HowItWorks />
      <Faq />
      <EarlyAccess />
    </>
  )
}

export const Component = Landing
