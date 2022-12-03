import React from 'react';
import { Link } from 'react-router-dom';

const Step3 = () => {
    return (
        <form className='space-y-[66px]'>
            <input type="password" className='placeholder:text-[#B4B4B4] focus:outline-none border-b border-gray-400 w-full pl-5' placeholder='Write Password' />
            <div className="">
                <Link to='/signup/step2'>Back</Link>
                <button
                    className='w-[142px] ml-[69px] h-[49px] inline-block color-main leading-[49px] text-center rounded-[10px] font-[500] text-white shadow-md shadow-gray-400'
                >
                    SignUp
                </button>
            </div>
        </form>
    );
};

export default Step3;