import { AppModal } from '../../../../components/App-modal'
import * as React from 'react'

interface ICertCardProps {
    title?: string
    isPDF?: boolean
    date?: string
    file?: string
}

const CertCard: React.FunctionComponent<ICertCardProps> = (item) => {
    const [showCert, setShowCert] = React.useState(false)
    return (
        <div className='flex flex-col'>
            <button
                className='font-extrabold w-fit underline text-[21px] text-start hover:opacity-50'
                onClick={() => setShowCert(true)}
            >
                {item.title}
            </button>
            <p className='italic font-light'>{item.date}</p>
            <AppModal
                closeIcon
                isOpen={showCert}
                onClose={() => setShowCert(false)}
            >
                {item?.isPDF ? (
                    <iframe className='h-screen w-full p-5' src={item.file} />
                ) : (
                    <img className='h-screen w-full p-5 object-contain' src={item.file} />
                )}
            </AppModal>
        </div>
    )
}

export default CertCard
