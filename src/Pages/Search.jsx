import React, { useCallback, useState } from 'react'
import { MoveLeft, Mic, Focus } from 'lucide-react'

function SearchPage({ setShowSearch, setShowAudioListening, searchValue, setShowLens }) {

    const [searchText, setSearchText] = useState(searchValue || '');

    const onBackClicked = useCallback(() => {
        setShowSearch(false)
    }, [])
    
    const onMicClicked = useCallback(() => {
        setShowAudioListening(true);
        setShowSearch(false);
    }, [])

    const onSearchTextChanged = useCallback((e) => {
        setSearchText(e.target.value);
    }, [])

    const onLensClicked = useCallback(() => {
        setShowLens(true);
    }, [])

    return (
        <div className='w-screen h-screen z-[10] p-4 inset-0 fixed bg-[#222222] flex flex-col gap-y-4 text-[#fff]/85'>
            <div className='flex flex-row px-4 py-2 gap-x-4 bg-[#313131] rounded-full'>
                <MoveLeft onClick={onBackClicked}/>
                <input value={searchText} onChange={onSearchTextChanged} className='w-fit outline-none' placeholder='Search...'/>
                <Mic onClick={onMicClicked}/>
                <Focus onClick={onLensClicked}/>
            </div>            
        </div>
    )
}

export default SearchPage