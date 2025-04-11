import { User } from 'lucide-react';
import React, { useCallback, useEffect, useRef } from 'react'

function ResizeToTop({ resizabaleRef, setTop }) {

    const prevTop = useRef(300);

    const onMouseDown = useCallback((e) => {
        
        // document.addEventListener('mousemove', onMouseMove);
        // document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('touchmove', onMouseMove);
        document.addEventListener('touchend', onMouseUp);
    }, []);
    
    const onMouseMove = useCallback((e) => {
        // setHeight(Math.random() * 100)
        const topValue = e.targetTouches[0].clientY;
        // console.log('topvalue', topValue)
        if(topValue < 0 || topValue > 600) return;
        setTop(topValue);

    }, [prevTop.current]);
    
    const onMouseUp = useCallback((e) => {
        
        // document.removeEventListener('mousemove', onMouseMove);
        // document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('touchmove', onMouseMove);
        document.removeEventListener('touchend', onMouseUp);
    }, []);
    
    useEffect(() => {
        if (!resizabaleRef.current) return;
        
        // resizabaleRef.current.addEventListener('mousedown', onMouseDown);
        resizabaleRef.current.addEventListener('touchstart', onMouseDown)
        
        return () => {
            resizabaleRef.current.removeEventListener('mousedown', onMouseDown);
            // document.removeEventListener('mousemove', onMouseMove);
            // document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('touchmove', onMouseMove);
            document.removeEventListener('touchend', onMouseUp);
        };
    }, [resizabaleRef.current]);

    return (<></>)
}

export default ResizeToTop