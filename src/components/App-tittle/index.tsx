import * as React from 'react'

interface IAppTitleProps {
    title: string
    icon: React.ReactNode
}

const AppTitle: React.FunctionComponent<IAppTitleProps> = (props) => {
    return (
        <h1
            data-aos='fade-right'
            className=' font-bold text-[24px] transition-all md:text-[3.2rem] uppercase inline-flex items-center gap-2'
        >
            {props.icon}
            <span>{props.title}</span>
        </h1>
    )
}

export default AppTitle
