import titleLogo from './assets/globe.svg'
import creationsLogo from './assets/creations.svg'
import './App.css'

function App() {
  return (
    <>
      <section id="center">
        <h1>Geo Quiz</h1>
        <img src={titleLogo} className="base" width="291" height="315" alt="Globe Logo" />
        <img src={creationsLogo} className="base" width="134" height="75" alt="Globe Logo" />
      </section>
    </>
  )
}

export default App
