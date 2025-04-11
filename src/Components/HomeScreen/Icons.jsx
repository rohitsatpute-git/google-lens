import React from 'react'
import { ImagePlus, Languages, GraduationCap, Music2 } from 'lucide-react'

function Icons() {

    const icons = [
        {
            icon: <ImagePlus/>,
            bg: '[#000]',
        },
        {
            icon: <Languages/>,
            bg: '[#000]',
        },
        {
            icon: <GraduationCap/>,
            bg: '[#000]',
        },
        {
            icon: <Music2/>,
            bg: '[#000]',
        }
    ]


    return (
        <div className='flex flex-row gap-x-4 justify-evenly'>
            {
                icons.map((icon, index) => (
                    <span key={index} className={`rounded-lg px-4 py-2 bg-${icon.bg} border border-amber-100`}>
                        {icon.icon}
                    </span>
                ))
            }
        </div>
    )
}

export default Icons