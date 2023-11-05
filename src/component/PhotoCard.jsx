import React from 'react'

function PhotoCard({ indx, item, checked, handleCheckboxChange }) {

    //check photo selecte or not
    const isChecked = checked.includes(indx.toString());
    return (
        //photo grid
        <div className={` ${indx === 0 ? 'large min-h-80' : 'small'} ${isChecked ? "brightness-75" : ""} rounded-2xl hover:brightness-50`}>
            <div className={`border rounded-2xl overflow-hidden `}>
                <div className='rounded-2xl overflow-hidden shadow relative group w-full h-full'>
                    <div>
                        <input
                            type="checkbox"
                            value={indx}
                            checked={isChecked}
                            onChange={handleCheckboxChange} // Use onChange to handle checkbox changes
                            className={`ml-3 mt-3 w-4 h-4 text-blue-600 bg-white border-gray-300 rounded absolute z-5 ${isChecked ? 'block' : 'hidden'} group-hover:block`}
                        />
                        <img
                            src={`./images/${item}`}
                            alt=""
                            className="rounded-2xl w-full z-1"
                        // onMouseEnter={handleMouseEnter}
                        // onMouseLeave={handleMouseLeave}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoCard
