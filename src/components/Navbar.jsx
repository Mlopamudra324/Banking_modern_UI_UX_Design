import { React, useState } from 'react';
import close from '../assets/close.svg';
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'
import { navLinks } from '../constants';

export const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (

        // <nav> HTML tag is used to define a section of a webpage that contains navigation links. It is typically used for menus, navigation bars, or other groups of links that allow users to navigate through the website. The <nav> element helps improve accessibility by signaling to assistive technologies that this is a navigation area.
        <nav className='w-full flex py-6 justify-between items-center navbar '>
            <img src={logo} alt="hoobank" className='w-[124px] h-[32px] ' />

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
                    >
                        <a href={`#${nav.id}`} >
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>

            {/* this is for mobile devices */}
            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu}
                    alt="menu" className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle((prev) => !prev)}
                />
                {/* this is how we set the state with the previous version of the state */}
                {/* if the toggle is turned on then i want to show a close icon otherwise I want to show a menu icon 
                the object-contain property in CSS is part of the object-fit property, which controls how content (like images or videos) is resized to fit within a container . object-fit: contain; is great for situations where you want to show the entire object without cropping, but you don't mind some space around it.*/}

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}>
                    <ul className='list-none flex  justify-end items-center flex-1 flex-col'>
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
                            >
                                <a href={`#${nav.id}`} >
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
