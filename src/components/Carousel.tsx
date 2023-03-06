import React from 'react'
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg'
import Card from './Card'

export default function Carousel({ num, productsData }: any) {

    let next = 0
    let prev = productsData.length - 1
    function onClickLeft() {
        let cardWidth = document.querySelector(`.carousel-item-${num}`)?.clientWidth
        document.querySelector(`.carousel-${num}`)?.scrollBy({
            left: -cardWidth!,
            behavior: 'smooth'
        })
        if (!document.querySelector(`.carousel-${num}`)?.scrollLeft) getNewCarouselPrev()
    }
    function onClickRight() {
        let cardWidth = document.querySelector(`.carousel-item-${num}`)?.clientWidth
        let carousel = document.querySelector(`.carousel-${num}`)
        carousel.scrollBy({
            left: +cardWidth!,
            behavior: 'smooth'
        })
        if (carousel.scrollWidth - carousel.clientWidth === Math.ceil(carousel.scrollLeft)) {
            getNewCarouselNext()
        }
    }

    function getNewCarouselNext() {
        let carousel = document.querySelectorAll(`.carousel-item-${num}`)[next].cloneNode(true)
        document.querySelector(`.carousel-${num}`)?.appendChild(carousel)
        next++;
        if (next === productsData.length) next = 0
    }

    function getNewCarouselPrev() {
        let carousel = document.querySelectorAll(`.carousel-item-${num}`)[prev].cloneNode(true)
        document.querySelector(`.carousel-${num}`)?.prepend(carousel)
        prev--;
        if (prev === -1) prev = productsData.length - 1
    }

    function autoMover() {
        let cardWidth = document.querySelector(`.carousel-item-${num}`)?.clientWidth
        let carousel = document.querySelector(`.carousel-${num}`)
        let autoSlider = setInterval(() => {
            carousel.scrollBy({
                left: +cardWidth!,
                behavior: 'smooth'
            })
            if (carousel.scrollWidth - carousel.clientWidth === Math.ceil(carousel.scrollLeft)) {
                getNewCarouselNext()
            }
        }, 3000);
        return () => clearInterval(autoSlider)
    }

    // React.useEffect(() => {
    //     autoMover()
    // }, [])

    return (
        <>
            <div className="my-16 md:my-24  text-center w-full mx-auto">
                <div className="z-10">
                    <div className='flex justify-center md:justify-between items-center flex-wrap'>
                        <p className="text-[24px] px-3 md:text-[36px] text-start font-[700]">{productsData.Name}</p>
                        <div className="flex justify-center  py-2 gap-2">
                            <button className="btn btn-link btn-sm" onClick={onClickLeft}>
                                <CgArrowLongLeft className='w-6 h-6' />
                            </button>
                            <button className="btn btn-link btn-sm" onClick={onClickRight}>
                                <CgArrowLongRight className='w-6 h-6' />
                            </button>
                        </div>
                    </div>
                    <div className={`z-10 carousel carousel-${num} carousel-center  space-x-4 flex justify-start items-center  my-2`}>
                        {
                            productsData.products.map((item, index) => {
                                return (
                                    <Card key={index} num={num} data={item} />
                                )
                            })
                        }
                    </div>
                </div>
                <a href={`/shop=${productsData.url}`} className="bg-base-300 w-fit mx-auto hover:rounded-md px-3 py-2 cursor-pointer duration-150 my-3 flex justify-center items-center text-white text-[16px] ">View all
                <CgArrowLongRight className='w-6 h-6 ml-3' />
                </a>
            </div>
        </>
    )
}
