
import React from 'react';
import SingleData from './SingleData';

const DataTable = ({ data }) => {
    return (
        <div>

            <div className="container p-2 mx-auto sm:p-4 " >
                <div className=" overflow-x-auto text-xs" >
                    <div className="grid grid-cols-3 lg:grid-cols-5 " >
                        <div className="w-32 px-2 py-3 sm:p-3" >Date</div>
                        <div className=" px-2 py-3 sm:p-3" >Employee Name</div>
                        <div className=" px-2 py-3 sm:p-3" >Status</div>
                        <div className=" px-2 py-3 sm:p-3 lg:block hidden" >Branch</div>
                        <div className=" px-2 py-3 sm:p-3 lg:block hidden" >Position</div>
                    </div>
                    {
                        Object.values(data).map((employee) => <SingleData
                            key={employee.id}
                            employee={employee}
                        />)
                    }

                </div>
            </div>
        </div>
    );
};

export default DataTable;