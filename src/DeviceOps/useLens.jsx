import React, { useRef, useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import Cropper from 'react-cropper';

const useLens = () => {
  const [photo, setPhoto] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const cropperRef = useRef(null);

  const takePhoto = async () => {
    try {
      const image = await Camera.pickImages({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });

      setPhoto(image.photos[0].webPath);
    } catch (error) {
      console.error('Camera error:', error);
    }
  };

  const getCropData = () => {
    if (cropperRef.current) {
      setCroppedImage(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
    }
  };

  return {
    takePhoto, 
    croppedImage,
    getCropData,
    photo,
    cropperRef
  }
  // (
  //   <div>
  //     <button onClick={takePhoto} style={{ padding: 10, fontSize: 18 }}>
  //       Capture
  //     </button>

  //     {photo && (
  //       <div className="cropper-container">
  //         <Cropper
  //           ref={cropperRef}
  //           src={photo}
  //           style={{ height: 400, width: '100%' }}
  //           aspectRatio={1} 
  //           guides={true}
  //           crop={e => console.log(e.detail)}
  //         />
  //       </div>
        
  //     )}

  //     <button onClick={getCropData}>Crop Image</button>


  //     {croppedImage && (
  //       <div className="cropped-image-container">
  //         <h3>Cropped Image</h3>
  //         <img src={croppedImage} alt="Cropped" />
  //       </div>
  //     )}
  //   </div>
  // );
};

export default useLens;