import React, { useCallback, useEffect, useRef, useState } from 'react'
import useLens from '../DeviceOps/useLens'
import { Plus } from 'lucide-react';
import { Cropper } from 'react-cropper';
import ImageSearchScrollBar from '../Components/ImageComponent/ImageSearchScrollBar';
import useSideEffects from '../hooks/useSideEffects';
function Lens({ setShowLens }) {

    const { takePhoto, photo, getCropData, croppedImage, cropperRef, error } = useLens();

    useEffect(() => {
        takePhoto();
    }, [])

    useSideEffects(() => {
        if(error) setShowLens(false);
    }, [error])

    useSideEffects(() => {
        getCropData()
    }, [photo])

    const onClose = useCallback(() => {
        setShowLens(false)
    }, [])


    return (
        <div className='fixed inset-0 flex flex-col gap-x-4 z-[10] bg-[#222222] no-scrollbar' >
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
            <ImageSearchScrollBar croppedImage={croppedImage} setShowLens={setShowLens}/>

        </div>
    )
}

export default Lens