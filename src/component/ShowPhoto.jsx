// import React from 'react';
import '../App.css'
import PhotoItem from './PhotoItem'

function ShowPhoto() {
    const photo = ['image-1.webp', 'image-2.webp', 'image-3.webp', 'image-4.webp', 'image-5.webp', 'image-6.webp', 'image-7.webp', 'image-8.webp', 'image-9.webp', 'image-10.webp', 'image-11.webp'];
    return (
        <>
            <div className='m-3 p-2'>
                <div className='container p-3'>
                    <div>
                        <h1 disabled={true}>Gallary</h1>
                        {/* <div disabled={false} className='' >file selected</div> */}
                    </div>
                    <div>
                        <button disabled={false} >Delete file</button>
                    </div>
                </div>
                <hr />
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl-grid-cols-5 gap-4 w-full p-3'>
                    {
                        photo.map((name, index) => {
                            return (
                                <PhotoItem key={index} id={index} name={name} />
                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}

export default ShowPhoto
