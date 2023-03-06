import React from 'react'

export default function ProductLinear({ data }: any) {
    return (
        <>
            <div className="my-16 md:my-24 w-11/12 text-center md:w-10/12 mx-auto">
                <h1 className=" text-[24px] px-3 md:text-[48px] font-[700]">{data.Name}</h1>



            </div>
        </>
    )
}
