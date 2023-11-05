import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import PhotoCard from './PhotoCard';

function PhotoMap({ checked, photo, handleCheckboxChange }) {

    const [dndPhoto, setDndPhoto] = useState(photo);

    //handle photo list when delete photo
    useEffect(() => {
        setDndPhoto(photo);
    }, [photo]);

    //handle drug and drop photo to reordered
    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const item = Array.from(dndPhoto);
        const [reorderedItem] = item.splice(result.source.index, 1);
        item.splice(result.destination.index, 0, reorderedItem);

        setDndPhoto(item);

    }


    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="photos">
                {(provider) => (
                    <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full"
                        {...provider.droppableProps} ref={provider.innerRef} >
                        {
                            //set all photo to grid
                            dndPhoto.map((item, indx) => {
                                return (
                                    <Draggable key={indx} draggableId={indx.toString()} index={indx}>
                                        {(provider) => (
                                            <div
                                                className={` ${indx === 0 ? 'large min-h-80' : 'small'}  rounded-2xl `}
                                                {...provider.draggableProps}
                                                {...provider.dragHandleProps}
                                                ref={provider.innerRef}
                                            >

                                                <PhotoCard

                                                    indx={indx}
                                                    item={item}
                                                    checked={checked}
                                                    handleCheckboxChange={handleCheckboxChange}

                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                )
                            })
                        }
                        {provider.placeholder}
                    </div>

                )}
            </Droppable>
        </DragDropContext>
    );
}

export default PhotoMap;
