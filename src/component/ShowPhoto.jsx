import React, { useState } from "react";
import PhotoMap from "./PhotoMap";

function ShowPhoto() {
    const data = ['image-1.webp', 'image-2.webp', 'image-3.webp', 'image-4.webp', 'image-5.webp',
        'image-6.webp', 'image-7.webp', 'image-8.webp', 'image-9.webp', 'image-10.webp', 'image-11.webp']
    const [photo, setPhoto] = useState([...data]);
    const [checked, setChecked] = useState([]);

    //selected photo handle
    const handleCheckboxChange = (event) => {

        const newChecked = [...checked];
        if (event.target.checked) {
            newChecked.push(event.target.value);
        }
        else {
            const index = newChecked.indexOf(event.target.value);
            newChecked.splice(index, 1);
        }


        setChecked(newChecked);
        console.log(checked);
    };

    //handle delete button click
    const handleDelete = () => {
        const newPhoto = photo.filter((_, ind) => !checked.includes(ind.toString()));

        setPhoto(newPhoto);

        setChecked([]);

    }
    const checkedCount = checked.length;



    return (
        <>
            <div className='bg-white rounded-md w-full h-full bg-green-100 '>
                <div className='w-full flex py-3 px-5 h-16 items-center justify-between'>
                    <div className="flex flex-row">
                        {checkedCount > 0 ? (
                            <>
                                <input className="px-4" type="checkbox" checked />
                                <p className="font-semibold" >
                                    {checkedCount} {checkedCount > 1 ? " Files" : "File"} Selected
                                </p>
                            </>
                        ) : (
                            <>
                                <h3 className="text-3xl font-semibold">Gallery</h3>
                            </>
                        )}
                    </div>
                    <div >
                        {checkedCount > 0 && <button onClick={handleDelete} className="text-red-500 font-semibold"
                        >Delete {checkedCount > 1 ? " Files" : "File"}</button>
                        }

                    </div>
                </div>
                <hr />
                <br />


                <div >
                    {

                        <PhotoMap
                            photo={photo}
                            checked={checked}
                            handleCheckboxChange={handleCheckboxChange}
                        />
                    }
                    <label
                        htmlFor="fileUpload"
                        className="grid border-dashed w-40 h-full min-w-[130px] min-h-[200px]  border-2 rounded-lg overflow-hidden cursor-pointer ml-4">
                        <div className="w-full h-full flex justify-center items-center flex-col space-y-2 hover:bg-gray-200">
                            <img src="images/imgLogo.png" alt="icon" className="max-w-[35px]" />
                            <div className="text-sm text-gray-500">Add Files</div>
                        </div>
                        <input type="file" className="hidden " id="fileUpload" />
                    </label>
                </div>
            </div>
        </>
    );
}

export default ShowPhoto;