import * as React from 'react'
import { twMerge } from 'tailwind-merge'

interface IWorkExperienceProps {
    image?: string
    company?: string
    title?: string
    duration?: string
    jobDescription?: string[]
    index?: number
}

const WorkExperience: React.FunctionComponent<IWorkExperienceProps> = (
    props
) => {
    return (
        <div
            className={twMerge(
                'w-full flex flex-col min-w-full',
                (props?.index ?? 0 + 1) % 2 !== 0
                    ? 'md:flex-row-reverse'
                    : 'md:flex-row',
                'border-b'
            )}
        >
            <div className='h-full'>
                <img
                    src={props.image}
                    alt=''
                    className='w-full h-full object-contain'
                />
            </div>
            <div className='h-full p-5 font-bold flex flex-col justify-center items-center'>
                <div data-aos='fade' className=' text-start w-full pb-2'>
                    <h1 className='font-extrabold text-title'>
                        {props.company}
                    </h1>
                    <p className='text-description'>{props.title}</p>
                    <p className='text-description'>{props.duration}</p>
                </div>
                <ul className='flex flex-col gap-3 list-disc font-light'>
                    {props.jobDescription?.map((item, index) => (
                        <li
                            data-aos='fade-up'
                            data-aos-delay={(index + 1) * 100}
                            key={index}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default WorkExperience
