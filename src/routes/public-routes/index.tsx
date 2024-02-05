import { Navigate, RouteObject } from 'react-router-dom'
import AppLayout from '../../components/Layout'
import CalvinPortfolio from '../../pages/Calvs'
import TriciaUmaliPortfolio from '../../pages/trish'
import Home from '../../pages/Calvs/Home'
import RecentWorks from '../../pages/Calvs/Recent-Work'
import Certificates from '../../pages/Calvs/Certificates'
import Education from '../../pages/Calvs/Education'

const PublicRoutes: RouteObject[] = [
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                errorElement: <>Error</>,
                element: <Navigate to='/calvin-manalac' replace />,
            },

            {
                path: '',
                element: <Navigate to='/calvin-manalac' replace />,
            },
            {
                path: '/calvin-manalac',
                element: <CalvinPortfolio />,
                children: [
                    {
                        path: '',
                        element: <Navigate to='about' replace />,
                    },
                    {
                        path: 'about',
                        element: <Home />,
                    },
                    {
                        path: 'recent-work',
                        element: <RecentWorks />,
                    },
                    {
                        path: 'certs',
                        element: <Certificates />,
                    },
                    {
                        path: 'education',
                        element: <Education />,
                    },
                    {
                        path: '*',
                        element: <>Error</>,
                    },
                    {
                        path: 'error',
                        element: <>Error</>,
                    },
                ],
            },
            {
                path: '/tricia-umali',
                element: <TriciaUmaliPortfolio />,
            },
        ],
    },
]

export default PublicRoutes
