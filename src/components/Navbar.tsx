import React from "react";
import { CgClose } from "react-icons/cg";
import '../../styles/navbar.css'


// @ts-ignore
import logo from "../assets/navlogo.jpg";
import { ProductData } from "../constants/data";

export default function Navbar() {
    const [drawer, setDrawer] = React.useState(false);
    function OpenDrawer(isOPen: boolean) {
        setDrawer(isOPen);
        if (isOPen) {
            document.body.style.height = "100%";
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.height = "unset";
            document.body.style.overflow = "unset";
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', function () {
            var header = document.querySelector('#above-navbar');
            header.classList.toggle('sticky', window.scrollY > 0);
        })

    }, []);
    return (
        <>
            <div id="above-navbar">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid w-11/12 md:w-10/12">
                        <a className="navbar-brand flex justify-start items-center" href="/">
                            <img src={logo} alt="Logo" className="logo" />
                            <p className="font-[600] text-[24px] leading-[24px] ml-2">ParX</p>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {
                                    ProductData.map((item, index) => {
                                        if (index >= 4) return null;
                                        return (
                                            <li className="nav-item styler px-2 mx-2" key={index}>
                                                <a className="nav-link active text-black" aria-current="page" href={`/shop=${item.url}`}>{item.Name}</a>
                                            </li>
                                        )
                                    })
                                }
                                <a href="/shop=all" className="bg-base-300 w-fit  hover:rounded-md px-3  cursor-pointer duration-150 pt-[0.6rem] ml-5 text-white text-[16px] ">View all </a>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
