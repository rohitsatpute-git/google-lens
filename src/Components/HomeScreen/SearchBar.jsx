import React, { useCallback, useEffect } from 'react'
import { Mic, Search, Focus, MicOff } from 'lucide-react'
import useAudioRecorder from '../../DeviceOps/AudioRecorder'
import useLens from '../../DeviceOps/useLens';

function SearchBar({ setShowSearch, setShowLens, setShowAudioListening }) {
    const { audioUrl, handleStart, handleStop, recording } = useAudioRecorder();
    const { photo, takePhoto, getCropData, croppedImage } = useLens();

    const onSearchClicked = useCallback(() => {
        setShowSearch(true);
    }, [])

    const onLensClicked = useCallback(() => {
        setShowLens(true);
    }, [])

    const onMicClicked = useCallback(() => {
        setShowAudioListening(true);
    }, [])

    return (
        <div className='flex border rounded-3xl px-4 py-1  items-center shadow-2xl'>
            <Search onClick={onSearchClicked}/>
            <input className='px-4 py-2 outline-none ' placeholder='Search' onClick={onSearchClicked}/>
            <div className='self-end flex gap-x-4 items-center ml-auto h-full'>
                <Mic onClick={onMicClicked}/> 
                <Focus className='cursor-pointer' onClick={onLensClicked}/>
            </div>
        </div>
    )
}

export default SearchBar