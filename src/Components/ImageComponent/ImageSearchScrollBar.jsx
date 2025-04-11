import { Mic } from 'lucide-react'
import React, { useRef, useState } from 'react'
import ResizeToTop from '../../ResizableComponents/ResizeToTop'
import ResultContainer from './ResultContainer';

function ImageSearchScrollBar({ croppedImage } ) {


    const resizableRef = useRef();
    const [top, setTop] = useState(600);

    return (
        <div className={`fixed flex flex-col gap-y-4 w-screen z-[20] bg-[#1E1E1E] rounded-t-4xl p-4 text-[#fff]/95 h-screen `} style={{ top: `${top}px` }}>

            <div className='border border-[#fff]/55 h-1 w-[50%] mx-auto' ref={resizableRef}/>

            <div className='flex flex-row, gap-x-4 border items-center py-2 rounded-xl'>
                <img src='/googleLogo.png' className='w-10 h-10'/>
                <img src={croppedImage} alt='cropped image' className='w-10 h-10'/>
                <input type='text' placeholder='Ask about this image' className='w-fit outline-none py-2'/>
                <Mic/>
            </div>

            <div className='flex flex-row gap-x-4 max-w-[100%] overflow-x-scroll scrollbar-hide'>
                <span>All</span>
                <span>Products</span>
                <span>Maps</span>
                <span>News</span>
                <span>Videos</span>
                <span>Miscleneous</span>

            </div>

            <ResultContainer img={croppedImage}/>

            <ResizeToTop resizabaleRef={resizableRef} setTop={setTop}/>
        </div>
    )
}

export default ImageSearchScrollBar