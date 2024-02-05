import { MdCastForEducation } from 'react-icons/md'
import AppTitle from '../../../components/App-tittle'
import * as React from 'react'
import { images } from '../../../constants'

const Educations = [
    {
        title: 'Bachelor of Science in Information Technology',
        school: 'Don Honorio Ventura State University ',
        duration: '2018-2022',
    },
    {
        title: 'Senior High School',
        school: 'STI San Fernando',
        duration: '2016-2018',
    },
    {
        title: 'Junior High School',
        school: 'Pampanga High School',
        duration: '2011 - 2016',
    },
    {
        title: 'Primary Education',
        school: 'Santa Rita Elementary School ',
        duration: '2005 - 2011',
    },
]

const Education: React.FunctionComponent = () => {
    return (
        <div className='w-full h-full flex flex-col'>
            <AppTitle icon={<MdCastForEducation />} title='Education' />
            <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                <img
                    data-aos='fade'
                    src={images.toga}
                    alt=''
                    className='rounded-full shadow-lg max-w-[20rem]'
                />
                <ul className='list-disc flex flex-col gap-3'>
                    {Educations.map((item, index) => (
                        <li
                            data-aos='fade-up'
                            data-aos-delay={(index + 1) * 100}
                            key={index}
                            className='flex-col flex '
                        >
                            <h1 className='text-[21px] font-bold'>
                                {item.title}
                            </h1>
                            <p className=''>{`${item.school} | ${item.duration}`}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Education
