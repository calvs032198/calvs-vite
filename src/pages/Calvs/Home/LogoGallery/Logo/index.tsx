import React from 'react'

import { twMerge } from 'tailwind-merge'

interface IMenuCardsProps {
    item: string
}

const LogoCards: React.FunctionComponent<IMenuCardsProps> = ({ item }) => {
    return (
        <img
            tabIndex={0}
            src={item}
            className={twMerge(
                'w-[176px] h-[172px] object-contain mx-auto'
            )}
        />
    )
}

export default LogoCards
