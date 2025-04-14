import React from 'react'
import Item from './Item'

function ResultContainer({ img }) {
    return (
        <div className='w-full columns-2 overflow-y-scroll  overflow-x-hidden no-scrollbar'>
            {
                Array.from({ length: 50 }).map((item, index) => (
                    
                    <Item key={index} img={img}/>
                ))
            }
        </div>
    )
}

export default ResultContainer