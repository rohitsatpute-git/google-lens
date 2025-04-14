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
import './App.css'

function App() {

    const [showSearch, setShowSearch] = useState(false);
    const [showLens, setShowLens] = useState(false);
    const [showAudioListening, setShowAudioListening] = useState(false);
    const [searchText, setSearchText] = useState('')  

    return (
      <div className="relative inset-0 w-screen h-screen overflow-hidden flex flex-col items-center gap-y-4 px-4 pt-20 z-[0] bg-[#222222]">

           <div className="absolute top-4 right-2">
            <Login />
          </div>

          <Funnel className="absolute top-4 left-2 rotate-180 text-blue-300"/>

          <Title/>
          <SearchBar setShowSearch={setShowSearch} setShowLens={setShowLens} setShowAudioListening={setShowAudioListening}/>
          <Icons/>


          <hr className="border border-[#fff]/35 w-screen"/>

          <Widgets/>
          <div className="flex-1 w-full overflow-hidden">
            <Feeds />
          </div>
          {showSearch && <SearchPage setShowSearch={setShowSearch} setShowAudioListening={setShowAudioListening} searchValue={searchText} setShowLens={setShowLens}/>} 
          {showLens && <Lens setShowLens={setShowLens}/>}
          {showAudioListening && <Audio setShowAudioListening={setShowAudioListening} setSearchText={setSearchText} setShowSearch={setShowSearch}/>}

          {/* <CaptureImage/> */}
      </div>
    )
}

export default App
