import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Solution from '../components/Solution'
import MidCta from '../components/MidCta'
import HowItWorks from '../components/HowItWorks'
import Comparison from '../components/Comparison'
import EarlyAccess from '../components/EarlyAccess'

function Landing() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <MidCta />
      <HowItWorks />
      <Comparison />
      <EarlyAccess />
    </>
  )
}

export const Component = Landing
