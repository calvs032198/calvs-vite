import React, { useEffect } from 'react'

interface ITitleGeneratorProps {
    title?: string
}

const TitleGenerator: React.FunctionComponent<ITitleGeneratorProps> = (
    props
) => {
    useEffect(() => {
        document.title = props?.title ?? 'Portfolio'
    }, [])
    return <></>
}

export default TitleGenerator
