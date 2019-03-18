import {useState, useEffect} from 'react';


function useWindowWidth() {
    const [width, setwidth] = useState(window.innerWidth)

    const handleResize = () => {
        setwidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);
    return width;
}

export default useWindowWidth;