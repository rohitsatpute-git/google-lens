import React, { useRef, useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import Cropper from 'react-cropper';

const useLens = () => {
  const [photo, setPhoto] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [error, setError] = useState(null);
  const cropperRef = useRef(null);

  const takePhoto = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });
      setPhoto(image.dataUrl);

    } catch (error) {
      console.warn('Camera error:', error);
      setError(error)
    }
  };

  const getCropData = () => {
    if (cropperRef.current) {
      setCroppedImage(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
    }
  };

  console.log("cropped image", croppedImage)

  return {
    takePhoto, 
    croppedImage,
    getCropData,
    photo,
    error
  }

};

export default useLens;