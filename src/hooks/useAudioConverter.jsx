import React, { useState, useRef, useEffect } from 'react';

const VoiceToText = () => {
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);
  useEffect(() => {
    try {
      // Try modern API first
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
          .catch((err) => {
            console.error('Mic permission denied (modern):', err);
          });
      } 
      // Fall back to legacy API
      else if (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
        const getUserMedia = navigator.getUserMedia || 
                            navigator.webkitGetUserMedia || 
                            navigator.mozGetUserMedia;
        
        // Legacy API uses callbacks instead of promises
        getUserMedia({ audio: true },
          // Success callback
          () => {
            console.log('Microphone permission granted');
          },
          // Error callback
          (err) => {
            console.error('Mic permission denied (legacy):', err);
          }
        );
      } else {
        console.warn('No getUserMedia API available in this browser');
      }
    } catch (error) {
      console.error('Error requesting microphone access:', error);
    }
  }, []);
  
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
    text,
    listening
  }
};

export default VoiceToText;
