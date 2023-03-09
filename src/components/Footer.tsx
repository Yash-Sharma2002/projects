import React from "react";

// @ts-ignore


import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { ProductData } from "../constants/data";


export function Footer() {
    return (
        <>
            <div className="bg-[#23262F] w-full text-white">
                <div className="w-11/12 md:w-10/12 flex flex-wrap justify-between items-start mx-auto my-10 md:my-16">
                    <div className="w-10/12 md:w-[30%] ">
                        <a className="navbar-brand flex justify-start items-center  my-8 md:my-10 " href="/">
                            <p className="font-[600] text-[24px] leading-[24px] ml-2">ParX Hardwares</p>
                        </a>
                        <p className="text-[12px] leading-[20px] font-[400] ">© 2023 Parx Hardwares. All rights reserved</p>
                    </div>

                    <div className="w-10/12 md:w-[70%] my-8 md:my-4 flex flex-wrap justify-start items-start ">
                        <div className="w-11/12 md:w-auto my-4 mx-4">
                            <p className="text-[16px] leading-[24px] font-[500]">Company Fact Sheet</p>
                            <div className="mt-2 md:mt-8">
                                <p className="text-[14px] leading-[24px] font-[700]">Year of Establishment: 2010</p>
                                <p className="text-[14px] leading-[24px] font-[700]">Nature of Business: Manufacturer, Supplier, Exporter and Trader</p>
                                <p className="text-[14px] leading-[24px] font-[700]">Number of Production Units: 1</p>
                                <p className="text-[14px] leading-[24px] font-[700]">Original Equipment Manufacturer: Yes</p>
                                <p className="text-[14px] leading-[24px] font-[700]">Number of Employees: 200</p>
                                <p className="text-[14px] leading-[24px] font-[700]">Standard Certifications: ISO 9001:2008 certified Company</p>
                            </div>
                        </div>
                        <div className="w-11/12 md:w-auto my-4 mx-4">
                            <p className="text-[16px] leading-[24px] font-[500]">Explore</p>
                            <div className="mt-2 md:mt-8">
                                {
                                    ProductData.map((item, index) => {
                                        return (
                                            <a href={`/shop=${item.url}`} key={index} className="text-[14px] leading-[24px] font-[700] block hover:text-white">{item.Name}</a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="w-11/12 md:w-auto my-4 mx-4">
                            <p className="text-[16px] leading-[24px] font-[500]">Contacts</p>
                            <div className="mt-2 md:mt-8">
                                <p className="text-[14px] leading-[24px] font-[700]">Call: 123123</p>
                                <p className="text-[14px] leading-[24px] font-[700]">Text: 222222</p>
                                <a href="mailto:yash@designelementary.com"><p className="text-[14px] leading-[24px] font-[700]">Email: yash@designelementary.com</p></a>
                                <div className="flex justify-start items-center my-2">
                                    <div className="rounded-lg bg-white p-1 mx-2">
                                        <BsFacebook className="text-[16px] text-black" />
                                    </div>
                                    <div className="rounded-lg bg-white p-1 mx-2">
                                        <BsInstagram className="text-[16px] text-black" />
                                    </div>
                                    <div className="rounded-lg bg-white p-1 mx-2">
                                        <BsTwitter className="text-[16px] text-black" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}