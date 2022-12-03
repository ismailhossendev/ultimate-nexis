import moment from 'moment';
import React from 'react';

const SingleData = ({ employee }) => {
    const [date, setDate] = React.useState('2022-11-02');
    const today = moment(date).format('YYYY-MM-DD')
    const attendance = employee?.attendance
    const status = attendance[today]
    return (
        <div className="grid grid-cols-3 lg:grid-cols-5 border-b border-opacity-20 " >
            <div className="w-32 px-2 py-3 sm:p-3" >
                <select onChange={e => setDate(e.target.value)}>
                    {
                        Object.keys(attendance).map((optionDate, i) => {
                            return <option key={i} value={optionDate}>
                                {optionDate}
                            </option>
                        })
                    }
                </select>
            </div>
            <div className=" block px-2 py-3 truncate sm:p-3 sm:w-auto" >{employee?.name} </div>
            <div className=" block px-2 py-3 truncate sm:p-3 sm:w-auto " >{status?.status}</div>
            <p className=' px-2 py-3 truncate sm:p-3 sm:w-auto lg:block hidden' >{employee.branch}</p>
            <p className=' px-2 py-3 truncate sm:p-3 sm:w-auto lg:block hidden' >{employee.branch}</p>
        </div>
    );
};

export default SingleData;