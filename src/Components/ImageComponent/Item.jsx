import React, { useEffect, useMemo, useState } from 'react'
import { getRandomImage } from '../../utils/searchAPI'

function Item({ img }) {

    const [imgSrc, setImgSrc] = useState('');

    useEffect(() => {
        const getImg = (async() => {
            const randomHeight = Math.floor(Math.max(100, Math.random() * 500))
            const img = await getRandomImage(200, randomHeight);
            setImgSrc(img);
        })
        getImg();
    }, [])

    return (
        <div className=' w-full flex flex-col border border-[#fff]/35 rounded-lg mb-2 break-inside-avoid'  >
            <img src={imgSrc} alt='img' className={`w-full rounded-t-lg object-cover`}/>
            {/* <hr className='border border-[#fff]/35'/> */}
            <div className='p-2'>
                Some kind of text
            </div>
        </div>
    )
}

export default Item