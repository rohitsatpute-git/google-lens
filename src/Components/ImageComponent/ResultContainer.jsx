import React from 'react'
import Item from './Item'

function ResultContainer({ img }) {
    return (
        <div className=' gap-x-4 grid grid-cols-2 w-full justify-between rounded-lg max-h-[100%] overflow-y-scroll gap-4'>
            {
                Array.from({ length: 500 }).map(item => (
                    
                    <Item img={img}/>
                ))
            }
        </div>
    )
}

export default ResultContainer