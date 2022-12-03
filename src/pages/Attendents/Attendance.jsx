import React from 'react';
import { useLoaderData } from 'react-router-dom';
import logo from "../../asset/logo/logo.png"
import DataTable from './DataTable';
const Attendance = () => {
    const data = useLoaderData()
    return (
        <div className='container mx-auto'>
            <div className="mt-[62px]">
                <img className='w-[164px] h-[60px]' src={logo} alt="" />
            </div>
            <div className="color-main  h-[72px] md:w-[480px] w-full text-white rounded mx-auto text-center">
                <h1 className='text-[36px] font-semibold leading-[72px]'>Attendance information</h1>
            </div>
            <DataTable
                data={data}
            />
        </div>
    );
};

export default Attendance;