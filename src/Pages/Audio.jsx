import React, { useCallback, useEffect } from 'react'
import useAudioConverter from '../hooks/useAudioConverter';
import { Plus, StepBack } from 'lucide-react';
import useSideEffects from '../hooks/useSideEffects';

function Audio({ setShowAudioListening, setSearchText, setShowSearch }) {
    const { handleStart, handleStop, text, listening } = useAudioConverter();

    useEffect(() => {
        handleStart();
    }, [])

    useSideEffects(() => {
        if(!listening) {

            setShowAudioListening(false);
            setShowSearch(true);
            setSearchText(text);
        }
    }, [text, listening])

    const onCancelClicked = useCallback(() => {
        handleStop();
        setShowAudioListening(false)
    }, [])

    return (
        <div className='fixed flex inset-0 flex-col bg-[#1E1E1E] z-[20] gap-x-4 items-center justify-around text-[#fff]/75 gap-y-4 pt-20 px-4'>
            <StepBack className='cursor-pointer absolute top-2 left-2 bg-[#fff]/75 p-1 rounded-md text-[#000]/50' onClick={onCancelClicked}/>
            <span>{listening ? 'Speak now...' : 'not listening'}</span>
            <span>{text}</span>
        </div>
    )
}

export default Audio