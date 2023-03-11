import React from 'react'

import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg'


export default function OfferedProducts() {

    const productsList = [
        {
            name: 'Zinc Mortice',
            name2: 'Zinc & Aluminium Hooks & Cabinet Fittings'
        },
        {
            name: 'AlDrop',
            name2: 'Window Stay'
        },
        {
            name: 'Stainless Steel Wire Mesh',
            name2: 'Stainless Steel Mortice Handles'
        },
        {
            name: 'Stainless Steel Cabinet Handle',
            name2: 'Rose Model Locks'
        },
        {
            name: 'Pvc Wire Mesh',
            name2: 'Pad Locks & Drawer Locks'
        },
        {
            name: 'Mosquito Mesh',
            name2: 'Mortice Locks'
        },
        {
            name: 'Manichitra',
            name2: 'Latches'
        },
        {
            name: 'Iron Mortice Handles',
            name2: 'Gate Hook'
        },
        {
            name: 'Electronic Lock',
            name2: 'Doors Stopper'
        },
        {
            name: 'Door Locks',
            name2: 'Door Hardware'
        },
        {
            name: 'Door Handles',
            name2: 'Door Fittings'
        },
        {
            name: 'Door Bolt Lock',
            name2: 'Cooper Wire Mesh'
        },
        {
            name: 'Chicken Mes',
            name2: 'Cabinet Handle'
        },
        {
            name: 'Brass Mortice',
            name2: 'Aluminum Sectional Handles'
        },
        {
            name: 'Aluminum Expanded Metal',
            name2: 'Aluminium Handle'
        },
    ]

    let next = 0
    let prev = productsList.length - 1
    function onClickLeft() {
        let cardWidth = document.querySelector('.carousel-item-products')?.clientWidth
        document.querySelector('.carousel-products')?.scrollBy({
            left: -cardWidth!,
            behavior: 'smooth'
        })
        if (!document.querySelector('.carousel-products')?.scrollLeft) getNewCarouselPrev()
    }
    function onClickRight() {
        let cardWidth = document.querySelector('.carousel-item-products')?.clientWidth
        let carousel = document.querySelector('.carousel-products')
        carousel.scrollBy({
            left: +cardWidth!,
            behavior: 'smooth'
        })
        if (carousel.scrollWidth - carousel.clientWidth === Math.ceil(carousel.scrollLeft)) {
            getNewCarouselNext()
        }
    }

    function getNewCarouselNext() {
        let carousel = document.querySelectorAll('.carousel-item-products')[next].cloneNode(true)
        document.querySelector('.carousel-products')?.appendChild(carousel)
        next++;
        if (next === productsList.length) next = 0
    }

    function getNewCarouselPrev() {
        let carousel = document.querySelectorAll('.carousel-item-products')[prev].cloneNode(true)
        document.querySelector('.carousel-products')?.prepend(carousel)
        prev--;
        if (prev === -1) prev = productsList.length - 1
    }

    function autoMover() {
        let cardWidth = document.querySelector('.carousel-item-products')?.clientWidth
        let carousel = document.querySelector('.carousel-products')
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

    React.useEffect(() => {
        autoMover()
    }, [])

    return (
        <>
            <div className="my-16 md:my-24 w-11/12 text-center md:w-10/12 mx-auto">
                <h1 className="mx-auto text-[24px] px-3 md:text-[48px] font-[700]">Products Offered By Us</h1>
                <p className="text text-[24px!important]">
                    Using the finest range of Brass, Zinc Alloy, Stainless Steel, Steel and Aluminium, our firm offers a fantastic range of goods which have a mind blowing design. The goods provided by us include-
                </p>
                <div className="z-10">
                    <div className='flex justify-center md:justify-between items-center flex-wrap'>
                        <p className="text-slate-800 text-[24px] md:text-[36px] font-bold sm:text-xl">
                            The goods provided by us include
                        </p>
                        <div className="flex justify-center  py-2 gap-2">
                            <button className="btn btn-link btn-sm" onClick={onClickLeft}>
                                <CgArrowLongLeft className='w-6 h-6' />
                            </button>
                            <button className="btn btn-link btn-sm" onClick={onClickRight}>
                                <CgArrowLongRight className='w-6 h-6' />
                            </button>
                        </div>
                    </div>
                    <div className="z-10 carousel carousel-products carousel-center  space-x-4 flex justify-start items-center  my-2" >
                        {

                            productsList.map((item, index:number) => {
                                return (
                                    <div key={index} className='carousel-item-products'>
                                        <p
                                            className='w-[300px] flex justify-center items-center  p-[10px] m-[10px] text-center hover:scale-[1.05] duration-150 carousel-item ' style={{ boxShadow: '1px 1px 10px 1px rgba(0, 0, 0, 0.2)' }}
                                        >
                                            {item.name}
                                        </p>
                                        <p
                                            className='w-[300px] flex justify-center items-center  p-[10px] m-[10px] text-center hover:scale-[1.05] duration-150 carousel-item ' style={{ boxShadow: '1px 1px 10px 1px rgba(0, 0, 0, 0.2)' }}
                                        >
                                            {item.name2}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


            </div>
        </>
    )
}
