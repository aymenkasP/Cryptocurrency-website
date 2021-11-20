import './App.css'
import Hero from './Components/hero/Hero'
import NavBar from './Components/nav/Navbar'
import WhyCRAPPO from './Components/WhyCRAPPO/WhyCRAPPO'
import TradeSecurely from './Components/TradeSecurely/TradeSecurely'
import Features from './Components/Features/Features'
import StartMinin from './Components/StartMining/StartMinin'
import Footer from './Components/footer/Footer'

function App() {
  return (
    <div className="App">
        <div  className="background-0D0D2B">
        <NavBar />
        <Hero />
        <WhyCRAPPO />
        </div>
        <TradeSecurely />
        <Features />
        <StartMinin />
        <Footer />
    </div>
  )
}

export default App
