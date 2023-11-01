
function PhotoItem({ name, id }) {
    if (id === 0)
        return (
            <div className='card card-bordered rounded-2xl shadow-inner  compact side bg-white  row-span-2 col-span-2 aspect-square'>
                <div className="flex-row item-center ">
                    <img src={`./images/${name}`} alt="" className="rounded-2xl" />
                </div>
            </div >
        )
    else
        return (
            <div className='card card-bordered shadow-inner rounded-2xl items-start  compact side bg-white h-40 aspect-square'>
                <input type="checkbox" className="ml-2 mt-2 absolute z-0" />
                <div className="flex-row item-center z-1">
                    <img src={`./images/${name}`} alt="" className="h-40 w-40 rounded-2xl" />
                </div>
            </div >
        )

}


export default PhotoItem