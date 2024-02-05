import React from 'react'
import TitleGenerator from '../../components/Title-Generator'
import { Outlet } from 'react-router-dom'

const CalvinPortfolio: React.FunctionComponent = () => {
    return (
        <div className='flex w-full'>
            <TitleGenerator title='Calvin Mañalac' />
            <div className='min-h-screen p-5 overflow-hidden flex flex-col mx-auto m-5 lg:min-w-[70rem]'>
                <Outlet />
            </div>
        </div>
    )
}

export default CalvinPortfolio
