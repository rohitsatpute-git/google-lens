import Title from './Components/HomeScreen/Title'
import AudioRecorderUI from "./DeviceOps/AudioRecorder"
import CaptureImage from "./DeviceOps/useLens"
import Login from './Login/Login'
import SearchBar from './Components/HomeScreen/SearchBar'
import { Funnel } from "lucide-react"
import Icons from './Components/HomeScreen/Icons'
import Widgets from "./Components/HomeScreen/Widgets"
import Feeds from "./Components/HomeScreen/Feeds"
import { useState } from "react"
import SearchPage from "./Pages/Search"
import Lens from "./Pages/Lens"
import Audio from "./Pages/Audio"

function App() {

    const [showSearch, setShowSearch] = useState(false);
    const [showLens, setShowLens] = useState(false);
    const [showAudioListening, setShowAudioListening] = useState(false);
  

    return (
      <div className="relative inset-0 h-screen w-screen flex flex-col items-center gap-y-4 px-4 pt-20">

           <div className="absolute top-2 right-2">
            <Login />
          </div>

          <Funnel className="absolute top-2 left-2 rotate-180 text-[#000]/20"/>

          <Title/>
          <SearchBar setShowSearch={setShowSearch} setShowLens={setShowLens} setShowAudioListening={setShowAudioListening}/>
          <Icons/>


          <hr className="border border-[#c0b7b7] w-full"/>

          <Widgets/>
          <Feeds/>

          {showSearch && <SearchPage setShowSearch={setShowSearch} setShowAudioListening={setShowAudioListening}/>} 
          {showLens && <Lens setShowLens={setShowLens}/>}
          {showAudioListening && <Audio setShowAudioListening={setShowAudioListening}/>}

          {/* <CaptureImage/> */}
      </div>
    )
}

export default App
