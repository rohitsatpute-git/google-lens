import React, { useCallback } from 'react'
import { MoveLeft, Mic, Focus } from 'lucide-react'

function SearchPage({ setShowSearch }) {

    const onBackClicked = useCallback(() => {
        setShowSearch(false)
    }, [])

    return (
        <div className='w-screen h-screen z-[10] p-4 inset-0 fixed bg-[#1E1E1E] flex flex-col gap-y-4 text-[#fff]/95'>
            <div className='flex flex-row px-4 py-2 gap-x-4 bg-[#313131] rounded-full'>
                <MoveLeft onClick={onBackClicked}/>
                <input className='w-fit outline-none' placeholder='Search...'/>
                <Mic/>
                <Focus/>
            </div>

            <hr className='border border-[#fff]/95'/>
            
        </div>
    )
}

export default SearchPage