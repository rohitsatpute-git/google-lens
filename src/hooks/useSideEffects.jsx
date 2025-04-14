import React, { useEffect, useState } from 'react'

function useSideEffects(functionToExecute, dependencies ) {
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        if(!mounted) {
            setMounted(true)
            return;
        }
        functionToExecute();
    }, [mounted, ...dependencies])

  return null
}

export default useSideEffects