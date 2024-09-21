/* eslint-disable no-unused-vars */
import { useSnapshot } from "valtio"
import Canvas from "./canvas"
import Customizer from "./pages/customizer"
import Home from "./pages/Home"
import state from "./store/Proxy";

function App() {
  const snap =useSnapshot(state);
  return (
    <>
    
    
    <main className={`app ${snap.intro ? 'intro-background' : 'default-background'}`}>
    <Home/>
    <Canvas/>
    <Customizer/>
    </main>
    </>
  )
}

export default App
