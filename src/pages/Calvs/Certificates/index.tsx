import { docs } from '../../../constants'
import AppTitle from '../../../components/App-tittle'
import * as React from 'react'
import { IoDocumentsOutline } from 'react-icons/io5'
import CertCard from './Items'


const certificates = [
    {
        title: `President's List`,
        date: 'Dec, 2021',
        file: docs.certificates.pl,
        fileType: 'pdf',
    },
    {
        title: 'HTML5 and CSS3',
        date: 'June, 2022',
        file: docs.certificates.keeping,
        fileType: 'pdf',
    },
    {
        title: 'Administering Google Maps',
        date: 'Jan, 2022',
        file: docs.certificates.gmaps,
        fileType: 'pdf',
    },
    {
        title: 'Keeping Up With the Javascripts: ES6',
        date: 'June, 2022',
        file: docs.certificates.jsEs6,
        fileType: 'pdf',
    },
    {
        title: `Dean's List`,
        date: 'April, 2022',
        file: docs.certificates.dl,
        fileType: 'pdf',
    },
    {
        title: 'Premium Javascript Module',
        date: 'June, 2022',
        file: docs.certificates.bit,
        fileType: 'img',
    },
    {
        title: 'AWS-How to setup?',
        date: 'April, 2022',
        file: docs.certificates.aws,
        fileType: 'pdf',
    },
    {
        title: 'Blending Web Technologies in Business Using the Right Tools',
        date: 'May, 2022',
        file: docs.certificates.blending,
        fileType: 'pdf',
    },
    {
        title: 'The Power of IT if Being Yoursef: Journey to a Successful IT Career',
        date: 'May, 2022',
        file: docs.certificates.journey,
        fileType: 'img',
    },
    {
        title: 'IT JOBS: CAREER OPTIONS, TITLES AND DESCRIPTIONS',
        date: 'May, 2022',
        file: docs.certificates.iT,
        fileType: 'pdf',
    },
]

const Certificates: React.FunctionComponent = () => {
    return (
        <div className='w-full h-full flex flex-col gap-5'>
            <AppTitle
                title='Awards and Certificates'
                icon={<IoDocumentsOutline />}
            />
            {certificates.map((item, index) => (
                <div data-aos='fade-up' data-aos-delay={(index + 1) * 100}>
                    <CertCard
                        date={item.date}
                        file={item.file}
                        isPDF={item.fileType === 'pdf'}
                        title={item.title}
                        key={index}
                    />{' '}
                </div>
            ))}
        </div>
    )
}

export default Certificates
