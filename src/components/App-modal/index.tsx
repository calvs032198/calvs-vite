import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { HiX } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'

interface AppModalProps {
    isOpen: boolean
    title?: string
    onClose: () => void
    children: React.ReactNode
    closeButton?: boolean
    closeIconClassName?: string
    containerClassName?: string
    closeIcon?: boolean
    titleClassName?: string
    isCartModal?: boolean
}

export const AppModal = ({
    isOpen,
    title,
    onClose,
    children,
    containerClassName,
    closeIcon,
    titleClassName,
    isCartModal,
}: AppModalProps) => {
    const [isOpenInternal, setIsOpenInternal] = useState<boolean>(false)
    const modalRef = useRef<HTMLDivElement>(null)
    // Close the modal when the `isOpen` prop changes
    useEffect(() => {
        setIsOpenInternal(isOpen)
        modalRef.current?.focus()
    }, [isOpen])
    return (
        <>
            <Transition appear show={isOpenInternal} as={Fragment}>
                <Dialog
                    className='fixed inset-0 z-50 overflow-y-auto'
                    onClose={onClose}
                >
                    <div className='min-h-screen px-4 text-center'>
                        <Transition.Child
                            as={'div'}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                        >
                            <Dialog.Overlay className='fixed inset-0 bg-black opacity-50' />
                        </Transition.Child>
                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className='inline-block h-screen align-middle'
                            aria-hidden='true'
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <div
                                tabIndex={0}
                                ref={modalRef}
                                aria-label={`${
                                    isCartModal
                                        ? 'sign in and sign up modal'
                                        : title
                                        ? title
                                        : 'modal'
                                }`}
                                className={twMerge(
                                    'inline-block w-full p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-[2px]',
                                    containerClassName ?? ''
                                )}
                            >
                                <Dialog.Title
                                    as='h3'
                                    className={twMerge(
                                        titleClassName ?? '',
                                        'text-lg font-medium leading-6 text-gray-900'
                                    )}
                                >
                                    {title}
                                </Dialog.Title>
                                {closeIcon && (
                                    <button
                                        onClick={onClose}
                                        tabIndex={0}
                                        aria-label='Close'
                                        className='absolute top-4 right-4 z-10 bg-white rounded-full hover:scale-105 p-2 cursor-pointer'
                                    >
                                        <HiX className='h-6 w-6 text-gray-600' />
                                    </button>
                                )}
                                <div className='mt-2'>{children}</div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
