import { FC, useEffect, useMemo, useState } from 'react'
import Slider from 'react-slick'
import LogoCards from './Logo'

interface props {
    array: string[]
    duration?: number
    autoScroll?: boolean
    buttons?: boolean
    isHome: boolean
}

const LogoGalleryCarousel: FC<props> = (props) => {
    const { array, autoScroll, isHome } = props
    const [active, setActive] = useState(0)
    const [screenWidth, setScreenWidth] = useState<number>(0)
    let timeoutId: ReturnType<typeof setTimeout>

    const slidesToShow: number = useMemo(() => {
        if (array.length > 0) {
            if (screenWidth > 1300)
                return array.length - 1 > 5 ? 5 : array.length - 1
            else if (screenWidth > 1024)
                return array.length - 1 > 5 ? 5 : array.length - 1
            else if (screenWidth > 800) return 3
            else if (screenWidth > 600) return 1
            else return 1
        } else return 0
    }, [screenWidth])

    if (!Array.isArray(array)) return <></>

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        arrows: !isHome,
        autoplay: autoScroll,
        duration: 500,
        swipe: false,
        centerMode: true,
        beforeChange: (oldInd: number, newIndex: number) => {
            console.log(oldInd)
            setActive(newIndex)
        },
        focusOnSelect: false,
    }

    useEffect(() => {
        // setSelected(array[active])

        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => {
            clearTimeout(timeoutId)
            window.removeEventListener('resize', handleResize)
        }
    }, [active, array])

    const ArrowPrev: FC<any> = ({ onClick }) => (
        <button
            tabIndex={0}
            role='button'
            aria-label='previous'
            onClick={onClick}
            className=' z-30 absolute top-[50%] translate-y-[-100%] left-3 hover:cursor-pointer hover:scale-110 rounded-full flex  min-w-[37px] min-h-[37px] max-w-[37px] max-h-[37px] bg-line p-1'
        >
            {/* <ChevronLeftIcon className='w-full h-full text-primary font-extrabold' /> */}
            <h1>{'<'}</h1>
        </button>
    )
    const ArrowNext: FC<any> = ({ onClick }) => (
        <button
            tabIndex={0}
            role='button'
            aria-label='next'
            onClick={onClick}
            className='absolute z-30 top-[50%] translate-y-[-100%] right-3 hover:cursor-pointer hover:scale-110 rounded-full flex  min-w-[37px] min-h-[37px] max-w-[37px] max-h-[37px] bg-line p-1'
        >
            {/* <ChevronRightIcon className='w-full h-full text-primary font-extrabold' /> */}
            <h1>{'>'}</h1>
        </button>
    )

    return (
        <div className='my-5 relative min-h-[350px] w-screen'>
            <Slider
                {...settings}
                nextArrow={<ArrowNext />}
                prevArrow={<ArrowPrev />}
                className='mx-auto  flex flex-row justify-center items-center w-full min-h-[20rem]'
            >
                {array.map((item, index) => (
                    <LogoCards item={item} key={index} />
                ))}
            </Slider>
        </div>
    )
}

export default LogoGalleryCarousel
