
import React, { useState } from 'react';
import PhotoCard from './PhotoCard';

function PhotoMap({ checked, photo, handleCheckboxChange }) {

    const [scaleActive, setScaleActive] = useState(false);

    const toggleCheckbox = () => {
        // const newCheckedState = !isChecked;
        // setIsChecked(newCheckedState);
        handleCheckboxChange();
    };

    const handleMouseEnter = () => {
        setScaleActive(true);
    };

    const handleMouseLeave = () => {
        setScaleActive(false);
    };

    return (
        photo.map((item, indx) => (
            <PhotoCard
                key={indx}
                indx={indx}
                item={item}
                checked={checked}
                handleCheckboxChange={handleCheckboxChange}
            />
        ))
    );
}

export default PhotoMap;
