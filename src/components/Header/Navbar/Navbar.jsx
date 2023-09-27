import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './logo/Logo';

const Navbar = () => {
  const [navbaron, setNavbarOn] = useState(false)
    return (
        <div>
            {/* <nav className='flex justify-between items-center px-5 shadow'>
                <Logo></Logo>
                <ul className='flex gap-4'>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav> */}
{/* <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">  
    <img className='w-48' src="https://i.ibb.co/L5t0csF/Logo.png" alt="" />
    </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
 
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
  </div>
</div> */}

<>
  <header>
    <nav
      className="
    flex flex-wrap
    items-center
    justify-between
    w-full
    py-4
    md:py-0
    px-4
    text-lg text-gray-700
    bg-white
  "
    >
      <div>
        <a href="#">
        <img className='w-48' src="https://i.ibb.co/L5t0csF/Logo.png" alt="" />
        </a>
      </div>
     <button type="submit" onClick={()=>setNavbarOn(navbaron?false:true)}>
     <svg
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        className="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
     </button>
      <div
        className={`${!navbaron && 'hidden'} w-full md:flex md:items-center md:w-auto`}
        id="menu"
      >
        <ul
          className="
        pt-4
        text-base text-gray-700
        md:flex
        md:justify-between 
        md:pt-0 gap-4"
        >
         <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
        </ul>
      </div>
    </nav>
  </header>
 
</>

        </div>
    );
};

export default Navbar;