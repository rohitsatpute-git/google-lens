import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

function useSpeechRecognization() {
    const startListening = () => {
        console.log("listening...")
         SpeechRecognition.startListening({ continuous: true });
    }
    const stopListening = () => {
        console.log('stopped...')
        SpeechRecognition.stopListening();
    }
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()

    return {
        startListening,
        transcript,
        browserSupportsSpeechRecognition,
        stopListening
    }
}

export default useSpeechRecognization