import React from 'react'

function Widgets() {
    return (
        <div className='flex flex-row gap-x-4 max-w-[100%] overflow-x-scroll h-full'>
            {
                Array.from({ length: 10 }).map((item, index) => (
                    <div className='border border-[#b6b4b4 rounded-lg p-2 flex flex-col gap-y-4' key={index}>
                        <span>IPL</span>
                        <span>Results</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Widgets