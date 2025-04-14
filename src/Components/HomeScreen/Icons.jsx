import React from 'react'
import { ImagePlus, Languages, GraduationCap, Music2 } from 'lucide-react'

function Icons() {

    const icons = [
        {
            icon: <ImagePlus/>,
            bg: '[#fff]',
        },
        {
            icon: <Languages/>,
            bg: '[]',
        },
        {
            icon: <GraduationCap/>,
            bg: '[]',
        },
        {
            icon: <Music2/>,
            bg: '[]',
        }
    ]




    return (
        <div className='flex flex-row gap-x-2 justify-evenly'>
            {
                icons.map((icon, index) => (
                    <span key={index} className={`rounded-3xl px-6 icon-span py-4 `}>
                        {icon.icon}
                    </span>
                ))
            }
        </div>
    )
}

export default Icons