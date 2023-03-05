import React from 'react'

// @ts-ignore
import img1 from '../assets/chimneys/1.jpg'
// @ts-ignore
import img2 from '../assets/door-handle/1.jpg'
// @ts-ignore
import img3 from '../assets/mortice-lock/1.jpg'
// @ts-ignore
import img4 from '../assets/aldrop/1.jpg'
// @ts-ignore
import logo from '../assets/navlogo.jpg'


export default function Top() {
    return (
        <>
            <div className='w-full h-[100vh] flex justify-center items-center'>
                <div className='flex justify-center md:justify-between items-center w-11/12 md:w-10/12 flex-wrap mx-auto'>
                    <div className='text-center md:text-start mx-auto md:w-1/2'>
                        <h2 className='text-white my-10 font-[Fredoka] font-[600] md:text-[72px] text-[60px] md:leading-[74px] leading-[32px] '>
                            ParX Hardwares
                        </h2>
                        <h1 className='text-white text-center flex justify-center md:justify-start items-center my-10 font-[Fredoka] font-[300] text-[24px] leading-[36px] '>
                            सुरक्षा चाहिए तो
                            <img
                                src={logo}
                                alt="Design Elementary"
                                className="px-2 mx-2 h-10 rounded-xl"
                            />
                            लगाईये
                        </h1>
                    </div>
                    <div className='w-full md:w-1/2 hidden md:flex flex-wrap justify-end'>
                        <img src={img4} alt="AlDrop" className='h-[250px] m-1 rounded-md' />
                        <img src={img2} alt="Door Handle" className='h-[250px] m-1 rounded-md' />
                        <img src={img3} alt="Mortice Lock" className='h-[250px] m-1 rounded-md' />
                        <img src={img1} alt="Chimney" className='h-[250px] m-1 rounded-md' />
                    </div>
                </div>
            </div>
        </>
    )
}
