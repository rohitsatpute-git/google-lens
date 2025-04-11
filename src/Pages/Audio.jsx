import React from 'react'
import useAudioConverter from '../hooks/useAudioConverter';
import { Plus } from 'lucide-react';

function Audio({ setShowAudioListening }) {
    // const { startListening, stopListening, transcript, browserSupportsSpeechRecognition }  = useSpeechRecognization();
    const { handleStart, handleStop, text } = useAudioConverter();



    return (
        <div className='fixed flex inset-0 flex-col bg-[#1E1E1E] z-[10] gap-x-4 items-center justify-around '>
            <Plus className='rotate-45 cursor-pointer absolute top-2 left-2'/>

            {text}
            <div className='flex flex-row gap-x-8 text-[#fff]/50'>
                <div onClick={handleStart}>start</div>
                <div onClick={handleStop}>stop</div>
            </div>
        </div>
    )
}

export default Audio