import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import * as React from 'react'
import { SiGmail } from 'react-icons/si'
import AppButton from '../../../components/App-button'
import links from '../Navbar/links'
import { Link } from 'react-router-dom'
import { AppModal } from '../../../components/App-modal'
import { docs } from '../../../constants'



const Footer: React.FunctionComponent= () => {
    const mainLocation = location.pathname.split('/')[1]
    const [showResume, setShowResume] = React.useState(false)
    const socials = [
        {
            icon: <FaFacebook />,
            label: 'Facebook',
            url: 'https://www.facebook.com/calvin.manalac',
        },
        {
            icon: <SiGmail />,
            label: 'Gmail',
            url: 'mailto:calvin.manalac21@gmail.com',
        },
        {
            icon: <FaLinkedin />,
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/mañalac-calvin-m-107054241/',
        },
        {
            icon: <FaInstagram />,
            label: 'Instagram',
            url: 'https://www.instagram.com/calvinmanalac/',
        },
    ]
    return (
        <div className='w-full  flex-col text-white bg-main-tg min-h-[14rem] flex py-12 md:px-8  px-2 gap-10'>
            <div className='flex flex-col md:flex-row w-full'>
                <div
                    data-aos='fade-right'
                    className='flex flex-col justify-center max-w-[36rem] gap-3'
                >
                    <h1 className='text-[50px] font-extrabold'>Get in Touch</h1>
                    <p className=''>"Let's Collaborate!</p>
                    <p>
                        I'm thrilled to connect with fellow developers,
                        potential clients, and enthusiasts alike. Whether you
                        have a project idea in mind, seek consultation, or just
                        want to discuss the latest tech trends, feel free to
                        reach out. Drop me a line, and let's start a
                        conversation!"
                    </p>
                </div>
                <div className='flex min-h-full flex-col-reverse w-full justify-center items-center h-full gap-8 px-8 py-5'>
                    <AppButton
                        variant='secondary'
                        className='w-full rounded-full'
                        onClick={() => setShowResume(true)}
                    >
                        Resume
                    </AppButton>
                    <div className='flex flex-col text-center'>
                        <h1 className='text-[18px] px-8 border-b mb-4 font-bold'>
                            About Me
                        </h1>
                        {links.map((item) => (
                            <Link
                                className='px-8 hover:opacity-75 hover:underline transition-all'
                                to={`${mainLocation}${item.url}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className='inline-flex gap-2'>
                {socials.map((item, index) => (
                    <a
                        href={item.url}
                        data-aos='fade-up'
                        key={index}
                        data-aos-delay={(index + 1) * 100}
                        target='_blank'
                        className='p-3 border border-main-sea fill-main-sea hover:opacity-90'
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
            <span className='font-light text-[14px] w-full border-t'>
                Copyright © 2024 - Calvin Mañalac
            </span>
            <AppModal
                closeIcon
                isOpen={showResume}
                onClose={() => setShowResume(false)}
            >
                <iframe src={docs.resume} className='h-screen w-full' />
            </AppModal>
        </div>
    )
}

export default Footer
