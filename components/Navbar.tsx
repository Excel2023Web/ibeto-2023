import React from "react";
import useState from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { Drawer } from "@mui/material";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const opening = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [dopen, setDopen] = React.useState(false);
  const [dopen1, setDopen1] = React.useState(false);

  const dopening = () => {
    setDopen(!dopen);
    setDopen1(false);
  };

  const dopening1 = () => {
    setDopen1(!dopen1);
    setDopen(false);
  };

  return (
    <header className="fixed  w-full rounded-b-[40px] sm:rounded-b-[66px] z-40 bg-gradient-to-b from-[#fffdfc] to-[#fffafe]">
      <div className="absolute inset-0 min-w-7xl">
        <img
          className="object-cover rounded-b-[40px] sm:rounded-b-[66px] w-full h-full opacity-10"
          src="./noise.png"
          alt=""
        />
      </div>
      <div className="px-0 py-1 mx-auto sm:px-0 sm:max-w-6xl 2xl:max-w-7xl">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between h-20 lg:justify-between lg:h-18">
            <div className="flex items-center justify-center ">
              <div className="flex-shrink-0">
                <Link href="https://excelmec.org" title="" className="flex">
                  <img
                    className="w-auto h-16 pl-4 sm:h-14 lg:h-16 lg:pl-0"
                    src="./excellogo.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            {!open ? (
              <button
                onClick={opening}
                type="button"
                className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 focus:text-black hover:text-black hover:bg-gray-100"
              >
                <RxHamburgerMenu size={25} color={"#0b0a26"} />
              </button>
            ) : (
              <button
                type="button"
                onClick={opening}
                className="inline-flex p-2 px-4 text-white font-bold transition-all duration-200 rounded-md lg:hidden focus:bg-[#0b0a26] hover:text-rose-600 hover:bg-gray-100"
              >
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-rounded/24/delete-sign.png"
                  alt="delete-sign"
                />
              </button>
            )}
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <div className="relative inline-block text-left">
                <div>
                  <Link href="#start">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full px-3 py-2 text-base font-medium text-black rounded-md font-body hover:text-rose-600 "
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      About
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative inline-block text-left">
                <div>
                  <Link href="#roadmap">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full px-3 py-2 text-base font-medium text-black rounded-md font-body hover:text-rose-600 "
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      Roadmap
                    </button>
                  </Link>
                </div>
              </div>{" "}
              <div className="relative inline-block text-left">
                <div>
                  <Link href="#problem">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full px-3 py-2 text-base font-medium text-black rounded-md font-body hover:text-rose-600 "
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      Problem Statements
                    </button>
                  </Link>
                </div>
              </div>{" "}
              <div className="relative inline-block text-left">
                <div>
                  <Link href="#timeline">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full px-3 py-2 text-base font-medium text-black rounded-md font-body hover:text-rose-600 "
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      Timeline
                    </button>
                  </Link>
                </div>
              </div>{" "}
              {/* <div className="relative inline-block text-left">
                <div>
                  <Link href="#sponsors">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full px-3 py-2 text-base font-medium text-black rounded-md font-body hover:text-rose-600 "
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      Sponsors
                    </button>
                  </Link>
                </div>
              </div>{" "} */}
              <div className="relative inline-block text-left">
                <div>
                  <Link href="#faq">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full px-3 py-2 text-base font-medium text-black rounded-md font-body hover:text-rose-600 "
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      FAQ
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:items-center">
              <Link href="https://excelmec.org" title="" className="flex">
                <img
                  style={{
                    width: "auto",
                    height: "7rem",
                    paddingLeft: "4px",
                  }}
                  className="w-auto h-16 pl-4 sm:h-14 lg:h-16 lg:pl-0"
                  src="./ibeto-2023-with-text.png"
                  alt=""
                />
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <Drawer
        className=""
        open={open}
        onClick={handleDrawerClose}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleDrawerClose();
          }
        }}
        anchor="left"
      >
        <div className="nav__drawer">
          <div className="nav__drawer_header">
            <div
              className="title_mob rounded-2xl font-body text-black"
              data-aos="fade-right"
              data-aos-duration="600"
            ></div>
            <div
              className="navbar_items_mob"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <Link
                href="#start"
                className="nav_item_mob hover:text-rose-800 font-body"
                onClick={handleDrawerClose}
              >
                About
              </Link>
              <Link
                href="#roadmap"
                className="nav_item_mob hover:text-rose-800 font-body"
                onClick={handleDrawerClose}
              >
                Roadmap
              </Link>
              <Link
                href="#problem"
                className="nav_item_mob hover:text-rose-800 font-body"
                onClick={handleDrawerClose}
              >
                Problem Statements
              </Link>
              <Link
                href="#timeline"
                className="nav_item_mob hover:text-rose-800 font-body"
                onClick={handleDrawerClose}
              >
                Timeline
              </Link>
              {/* <Link
                href="#sponsors"
                className="nav_item_mob hover:text-rose-800 font-body"
                onClick={handleDrawerClose}
              >
                Sponsors
              </Link> */}
              <Link
                href="#faq"
                className="nav_item_mob hover:text-rose-800 font-body"
                onClick={handleDrawerClose}
              >
                FAQ
              </Link>
            </div>
          </div>
          <Link
            href="https://ibeto.excelmec.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/ibeto-2023-with-text.png"
              alt=""
              className="meclogo__mob"
            />
          </Link>
        </div>
      </Drawer>
    </header>
  );
};

export default Navbar;
