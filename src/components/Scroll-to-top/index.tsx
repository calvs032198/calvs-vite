import * as React from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop: React.FunctionComponent = () => {
    const { pathname } = useLocation()
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }, [pathname])

    return <></>
}

export default ScrollToTop
