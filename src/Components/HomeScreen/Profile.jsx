import React from 'react'

function Profile() {
    const profileImageSrc = localStorage.getItem('picture');
    return (
        <img src={profileImageSrc}
            className='rounded-full object-cover w-[40px] h-[40px] cursor-pointer'
            />
    )
}

export default Profile