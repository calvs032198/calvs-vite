import * as React from 'react'
import { images } from '../../../constants'
import { RiComputerLine } from 'react-icons/ri'
import AppTitle from '../../../components/App-tittle'
import WorkExperience from './Work'

const Experience = [
    {
        title: 'Full Stack Software Engineer',
        jobDescription: [
            ' In this role, my main responsibilities revolved around frontend development using Typescript, material UI, Tailwind CSS, and React JS.',
            'Additionally, I engaged in backend development using Java Spring Boot and MySQL.',
            'Throughout my tenure, I was assigned to three distinct applications, marketing web app, ordering mobile app, and self-serving app.',
            ' Moreover, I actively participated in delivering project presentations and conducting demos for clients',
        ],
        duration: '(July,2022-Present)',
        image: images.hooli,
        company: 'Hooli Software, Inc.',
    },
    {
        title: 'Full Stack Software Engineer',
        jobDescription: [
            ' During this period, I primarily focused on backend development utilizing Express Js and MongoDB, along with frontend development using React Js',
        ],
        duration: '(March, 2021 - July, 2022)',
        image: images.rp,
        company: 'RP Innotect. Inc',
    },
]
const RecentWorks: React.FunctionComponent = () => {
    return (
        <div className='flex flex-col w-full h-full'>
            <AppTitle icon={<RiComputerLine />} title='My Working Experience' />
            {Experience.map((item, index) => (
                <WorkExperience {...item} key={index} index={index} />
            ))}
        </div>
    )
}

export default RecentWorks
