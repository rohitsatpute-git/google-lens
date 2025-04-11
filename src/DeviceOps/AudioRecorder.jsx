import React, { useState } from 'react';
import { startRecording, stopRecording } from './AudioControllers';

export default function useAudioRecorder() {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);

  const handleStart = async () => {
    await startRecording();
    setRecording(true);
    setAudioUrl(null);
  };

  const handleStop = async () => {
    const url = await stopRecording();
    setRecording(false);
    setAudioUrl(url);
  };

  return {
    recording,
    audioUrl,
    handleStart,
    handleStop
  };
}
