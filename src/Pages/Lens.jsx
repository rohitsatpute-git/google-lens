import React, { useCallback, useEffect, useRef, useState } from 'react'
import useLens from '../DeviceOps/useLens'
import { Plus } from 'lucide-react';
import { Cropper } from 'react-cropper';
import ImageSearchScrollBar from '../Components/ImageComponent/ImageSearchScrollBar';
function Lens({ setShowLens }) {

    const { takePhoto, photo, getCropData, croppedImage, cropperRef } = useLens();



    useEffect(() => {
        takePhoto();
    }, [])

    const onClose = useCallback(() => {
        setShowLens(false)
    }, [])


    return (
        <div className='fixed inset-0 flex flex-col gap-x-4 z-[10] bg-[#938d8d]' >
            <Plus className='absolute top-2 left-2 rotate-45' onClick={onClose}/>

            {photo && (
                <div className="border">
                <Cropper
                    ref={cropperRef}
                    src={photo}
                    style={{ height: '50vh',  width: '100vw' }}
                    aspectRatio={1} 
                    guides={true}
                    crop={getCropData}
                />
                </div>
            )}

            <ImageSearchScrollBar croppedImage={croppedImage}/>

        </div>
    )
}

export default Lens