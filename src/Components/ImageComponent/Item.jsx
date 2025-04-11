import React, { useMemo } from 'react'

function Item({ img }) {


    const imageHeight = 200

    return (
        <div className='w-full  p-2 flex flex-col gap-y-4 border rounded-lg h-fit' >
            <img src={img} alt='img' className={`w-full  rounded-2xl object-cover`} style={{ height: imageHeight }}/>
            <hr/>
            <div>
                Some kind of text
            </div>
        </div>
    )
}

export default Item