import React from 'react';
import { Link } from 'react-router-dom';

const Step2 = () => {
    return (
        <form className='space-y-[66px]'>
            <div className="flex gap-2  text-[16px]">
                <input type="text" className='placeholder:text-[#B4B4B4] focus:outline-none border-b border-gray-400 w-[90px] pl-5' placeholder='+880' />
                <input type="text" className='placeholder:text-[#B4B4B4] focus:outline-none border-b border-gray-400 w-full pl-5' placeholder='Write Email Address' />
            </div>
            <input type="text" className='placeholder:text-[#B4B4B4] focus:outline-none border-b border-gray-400 w-full pl-5' placeholder='1xxxxxxxxx' />
            <div className="">
                <Link to='/signup'>Back</Link>
                <Link to='/signup/step3'
                    className='w-[142px] ml-[69px] h-[49px] inline-block color-main leading-[49px] text-center rounded-[10px] font-[500] text-white shadow-md shadow-gray-400'
                >
                    Next Step
                </Link>
            </div>
        </form>
    );
};

export default Step2;