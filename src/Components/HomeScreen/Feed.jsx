import React, { useCallback } from 'react'

function Feed({ imgSrc, text }) {
    return (
        <div className='flex flex-col rounded-lg text-[#fff]/85 border border-[#fff]/35' >
            <img src={imgSrc} alt='img' className='w-full h-[150px] rounded-t-lg object-cover'/>
            <div className=' rounded-b-lg px-4 py-1 line-clamp-3'>
                {text}
            </div> 
        </div>
    )
}

export default Feed