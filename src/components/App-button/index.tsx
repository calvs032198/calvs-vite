import * as React from 'react'
import { twMerge } from 'tailwind-merge'

interface IAppButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    variant?: 'primary' | 'secondary'
}

const AppButton: React.FunctionComponent<IAppButtonProps> = (props) => {
    const { children, className, variant } = props
    return (
        <button
            {...props}
            className={twMerge(
                variant === 'primary'
                    ? 'bg-main-tg text-white hover:bg-teal-700'
                    : 'text-main-tg bg-white hover:bg-gray-400 hover:text-gray-950',
                'px-5 py-2 hover:opacity-75 font-semibold transition-all',
                className
            )}
        >
            {children}
        </button>
    )
}

export default AppButton
