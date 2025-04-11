import React, { useState, useRef } from 'react';

const VoiceToText = () => {
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const initRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition not supported in this browser.');
      return null;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    recognition.onend = () => {
      setListening(false);
    };

    return recognition;
  };

  const handleStart = () => {
    const recognition = initRecognition();
    if (recognition) {
      recognition.start();
      recognitionRef.current = recognition;
      setListening(true);
    }
  };

  const handleStop = () => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  return {
    handleStart,
    handleStop,
    text
  }
};

export default VoiceToText;
