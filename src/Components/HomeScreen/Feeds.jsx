import React from 'react'
import Feed from './Feed'

function Feeds() {
    return (
        <div className='flex flex-col gap-y-4 max-h-[100%] overflow-y-scroll '>
            {
                Array.from({ length: 10 }).map((_, index) => (
                    <div key={index}>
                        <Feed key={index}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Feeds