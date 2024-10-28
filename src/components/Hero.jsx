import React from 'react';
import styles from '../style';
import discount from '../assets/Discount.svg';
import robot from '../assets/robot.png'
import { GetStarted } from './GetStarted';

export const Hero = () => {
    return (

        // The <section> tag is used to define a thematic grouping of content. It's typically used for grouping related content, often with a heading, and it's semantically meaningful because it gives more structure to your page. Browsers, search engines, and assistive technologies recognize sections as distinct content units
        <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>

            {/* this is the left side of the hero section */}
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
                    <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
                    <p className={`${styles.paragraph} ml-2 `}>
                        <span className='text-white mr-2'>
                            20%
                        </span>DISCOUNT FOR {" "}
                        <span className='text-white'>
                            1 MONTH
                        </span>ACCOUNT
                    </p>
                </div>

                <div className='flex flex-row justify-between items-center w-full'>
                    <h1
                        className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
                        {/* leading here is line-height */}
                        The Next <br className='sm:block hidden' /> {" "}
                        {/* {" "} -> this indicates the space between after the the Next */}
                        <span className='text-gradient'>Generation</span> {" "}
                    </h1>

                    <div className='ss:flex hidden md:mr-4 mr-0'>
                        <GetStarted />
                    </div>
                </div>

                <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
                    Payment Method
                </h1>

                <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
                    Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                    We examine annual percentage rates, annual fees.
                </p>
            </div>

            {/* This is the right side of the hero section */}
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5] ' />

                {/* To add the gradient I add a series of self closing divs */}
                <div className='absolute z-[0] w-[40%] h-[35%] top-0 ' />
                <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 ' />
                <div className='absolute z-[0] w-[50%] h-[55%] right-20 ' />
            </div>

            <div className={`ss:hidden ${styles.flexCenter} `}>
                <GetStarted />
            </div>
        </section >
    )
}
