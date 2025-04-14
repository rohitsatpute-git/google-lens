import React from 'react'

function Widgets() {
    return (
        <div className='flex flex-row gap-x-4 max-w-[100%] h-auto overflow-x-scroll text-[#fff]/85 text-[12px] no-scrollbar'>
            {
                Array.from({ length: 10 }).map((item, index) => (
                    <div className='border border-[#5a5555] rounded-lg p-2 flex flex-col gap-y-4' key={index}>
                        <div className='flex flex-row gap-x-12'> 
                            <span>IPL</span>
                            <span>score</span>
                        </div>
                        <span>Results</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Widgets