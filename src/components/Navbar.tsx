import React from "react";
import { CgClose } from "react-icons/cg";

// @ts-ignore
import logo from "../assets/navlogo.jpg";

export default function Navbar({ children }: { children: React.ReactNode }) {
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
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        document.getElementById("navbar")!.classList.remove("hidden");
      } else {
        document.getElementById("navbar")!.classList.add("hidden");
      }
    });
  }, []);
  return (
    <>
      <div
        
        className="drawer duration-[150]  fixed w-full z-50 scroll-smooth"
        style={{
          boxShadow:
            "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px",
        }}
      >
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* <!-- Navbar --> */}
          <div className="bg-white hidden origin-bottom duration-300 ease-in py-2" id="navbar">
            <div className="lg:w-[85%] mx-auto navbar justify-between w-11/12 p-[unset] ">
              <div className="flex-none w-full justify-between lg:hidden">
                <a href="/">
                  <img
                    src={logo}
                    alt="Design Elementary"
                    className="px-2 mx-2 h-16"
                  />
                  <p className="text-[#0F2027] mx-4 font-[Fredoka] font-[600] text-[24px] leading-[36px] ">ParX</p>
                </a>
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-square btn-ghost"
                  onClick={() => OpenDrawer(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <a href="/">
                <img
                  src={logo}
                  alt="Design Elementary"
                  className="hidden lg:flex h-16 "
                />
                <p className="text-[#0F2027] mx-4 font-[Fredoka] font-[600] text-[24px] leading-[36px] ">ParX</p>
              </a>
              <div className="hidden lg:flex divider before:bg-[#E6E8EC] after:bg-[#E6E8EC] lg:divider-horizontal"></div>
              <a
                href="/"
                className="hidden lg:flex text-black hover:text-[#479E82] duration-150"
              >
                Item 1
              </a>
              <div className="hidden lg:flex divider before:bg-[#E6E8EC] after:bg-[#E6E8EC] lg:divider-horizontal"></div>
              <div className="dropdown hidden lg:flex dropdown-hover">
                <label
                  tabIndex={0}
                  className=" flex align-middle text-black hover:text-[#479E82] duration-150"
                >
                  Hover
                  <svg
                    className="fill-current mt-1 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </label>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 top-5 shadow-lg bg-white rounded-box w-52"
                  style={{
                    marginLeft: "-40px",
                    boxShadow:
                      "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px",
                  }}
                >
                  <li>
                    <a
                      href="/"
                      className="mx-2 text-[16px] leading-[24px] text-[#23262F] font-[400]"
                    >
                      Item 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mx-2 text-[16px] leading-[24px] text-[#23262F] font-[400]"
                    >
                      Item 2
                    </a>
                  </li>
                </ul>
              </div>
              <div className="hidden lg:flex divider before:bg-[#E6E8EC] after:bg-[#E6E8EC] lg:divider-horizontal"></div>
              <a
                href="/"
                className="hidden lg:flex text-black hover:text-[#479E82] duration-150"
              >
                Item 2
              </a>
              <div className="hidden lg:flex divider before:bg-[#E6E8EC] after:bg-[#E6E8EC]  lg:divider-horizontal"></div>
              <a
                href="/"
                className="hidden lg:flex btn bg-[#E93B3B] border-none rounded-full text-white hover:bg-[#E93B3B] normal-case h-10 min-h-0"
              >
                Book Consultation
              </a>
            </div>
          </div>
          {/* <!-- Page content here --> */}

          {children}
        </div>
        <div className="drawer-side h-screen">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-full bg-white">
            {/* <!-- Sidebar content here --> */}
            <div className="flex justify-between w-full mx-auto items-center">
              <a href="/">
                <img
                  src={logo}
                  alt="Design Elementary"
                  className="px-2 mx-2 h-16"
                />
                <p className="text-[#0F2027] mx-4 font-[Fredoka] font-[600] text-[24px] leading-[36px] ">ParX</p>
              </a>
              <label htmlFor="my-drawer-3">
                <CgClose
                  className="ml-auto mr-0 w-6 h-6  text-black"
                  onClick={() => OpenDrawer(false)}
                />
              </label>
            </div>
            <div className="mt-6">
              <li>
                <a
                  href="/"
                  className="text-[16px] font-[400] leading-[24px] text-[#23262F] hover:text-[#479E82] duration-150 "
                >
                  Sidebar Item 1
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-[16px] font-[400] leading-[24px] text-[#23262F] hover:text-[#479E82] duration-150 "
                >
                  Sidebar Item 2
                </a>
              </li>
            </div>

            <div className="collapse collapse-arrow w-fit">
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-[16px] font-[400] leading-[24px] text-[#23262F] hover:text-[#479E82] duration-150 ">
                Click me to show/hide content
              </div>
              <div className="collapse-content text-[16px] font-[400] leading-[24px] text-[#23262F] ">
                <p>hello</p>
              </div>
            </div>
            <a
              href="/"
              className="btn w-fit mx-auto px-5 bg-[#E93B3B] border-none rounded-full text-white normal-case h-10 min-h-0"
            >
              Book Consultation
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
