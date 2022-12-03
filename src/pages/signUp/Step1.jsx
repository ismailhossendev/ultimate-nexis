import React from 'react';
import { Link } from 'react-router-dom';

const Step1 = () => {
    return (
        <form className='space-y-[66px]'>
            <input type="text" className='placeholder:text-[#B4B4B4] focus:outline-none border-b border-gray-400 w-full pl-5' placeholder='Write First Name' />
            <input type="text" className='placeholder:text-[#B4B4B4] focus:outline-none border-b border-gray-400 w-full pl-5' placeholder='Write Last Name' />
            <div className="">
                <Link to='/signup/step2'
                    className='w-[142px] h-[49px] inline-block color-main leading-[49px] text-center rounded-[10px] font-[500] text-white shadow-md shadow-gray-400'
                >
                    Next Step
                </Link>
            </div>
        </form>
    );
};

export default Step1;