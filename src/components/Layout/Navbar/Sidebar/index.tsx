import { Transition } from '@headlessui/react'
import * as React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import links from '../links'
import { Link, useLocation } from 'react-router-dom'



const SideBar: React.FunctionComponent = () => {
    const location = useLocation()
    const mainLocation = location.pathname.split('/')[1]
    const [showMenuBar, setShowMenuBar] = React.useState(false)

    return (
        <>
            <div className='flex flex-col bg-main-tg py-4 text-white px-8 sticky'>
                <button onClick={() => setShowMenuBar(!showMenuBar)}>
                    <RxHamburgerMenu />
                </button>
            </div>
            <Transition
                appear={true}
                show={showMenuBar}
                enter='transition-opacity duration-75'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='transition-opacity duration-150'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
            >
                <div className='flex flex-col bg-main-tg py-2 text-white px-8 sticky justify-center items-center'>
                    {links.map((links, index) => (
                        <Link
                            key={index}
                            data-aos='fade-up'
                            data-aos-delay={100 * (index + 1)}
                            className='p-5 hover:opacity-80 transition-all'
                            to={`${mainLocation}${links.url}`}
                            onClick={() => setShowMenuBar(false)}
                        >
                            {links.label}
                        </Link>
                    ))}
                </div>
            </Transition>
        </>
    )
}

export default SideBar
