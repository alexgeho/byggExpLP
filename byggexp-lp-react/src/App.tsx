import BenefitsForOffice from "./components/Benefits/BenefitsForOffice"
import BenefitsForSite from "./components/Benefits/BenefitsForSite"
import Consequences from "./components/Consequences/Consequences"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import How from "./components/How/How"
import Pain from "./components/Pain/Pain"
import Why from "./components/Why/Why"


function App() {


  return (
    <>
     <Header/>
     <Hero/>
     <Pain/>
     <Why/>
     <Consequences/>
     <BenefitsForOffice/>
     <BenefitsForSite/>
     <How/>
    </>
  )
}

export default App
