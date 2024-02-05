import { RouterProvider } from 'react-router-dom'
import './App.css'
import Routes from './routes'
import { useEffect } from 'react'
import AOS from 'aos'
// aos
import 'aos/dist/aos.css'

function App() {
    useEffect(() => {
        AOS.init({
            offset: 50,
            duration: 300,
            easing: 'ease-in-sine',
            delay: 100,
            once: true,
        })
        AOS.refresh()
    }, [])

    return <RouterProvider router={Routes} />
}

export default App
