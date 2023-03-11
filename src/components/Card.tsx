import React from 'react'
import '../../styles/card.css'


export default function Card({ shop,num,data }: {shop:string, num:number,data: any }) {
    return (
        <>
            <div className={`main-container carousel-item carousel-item-${num} relative w-[350px] h-[300px] m-[10px] p-[10px]`}>
                <div className="the-card">
                    <div className="front-card ">
                        <img src={data.img} alt={data.name} />
                    </div>
                    <div className="back-card bg-base-300 flex justify-center items-center">
                        <div>
                            <p className="text-white text-2xl my-4 font-bold">{data.name}</p>
                            <a href={`/shop=${shop}/product=${data.id}`} className="text-white text-lg cursor-pointer border-2 border-white py-1 px-2">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
