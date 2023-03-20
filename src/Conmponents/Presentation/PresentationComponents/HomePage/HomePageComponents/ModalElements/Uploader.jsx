import React, { useContext } from 'react';
import ImageUploading from 'react-images-uploading';
import { ContextHome } from '../../../../../../ContextHomePage';

export function Uploader() {

    const { images, setImages } = useContext(ContextHome);
    const maxNumber = 69;

    const onChange = (imageList) => {
        setImages(imageList);
    };

    return (
        <div className='uploader'>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <button className='upload-btn'
                            style={isDragging ? { color: 'red' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Click or Drop here
                        </button>
                        &nbsp;
                        <button className='upload-btn' onClick={onImageRemoveAll}>Remove all images</button>
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image.data_url} alt="" width="200" />
                                <div className="image-item__btn-wrapper">
                                    <button className='upload-btn' onClick={() => onImageUpdate(index)}>Update</button>
                                    <button className='upload-btn' onClick={() => onImageRemove(index)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}
