import React, { createContext, useRef, useState } from 'react'

export const ContextHome = createContext();

export default function ContextHomePage({ children }) {


    const [images, setImages] = useState([]);
    const [imgArr, setImgArr] = useState([]);
    const [bool, setBool] = useState(true);
    const modal = useRef("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const listHeight = useRef("");

    const openModal = () => {
        if (bool) {
            modal.current.style.display = "block"
        }
    }

    const closeModal = () => {
        if (!bool) {
            modal.current.style.display = "none"
        }
    }
    
    const addToForm = (evt) => {
        evt.preventDefault();
        setBool(!bool);
        if (title !== "" && description !== "") {
            if (title.length > 10 || description.length > 10) {
                title.substring(0, 8);
                description.substring(0, 8);
            }
            setImgArr([
                ...imgArr,
                {
                    title: title,
                    description: description,
                    data: `${new Date()}`,
                    img: [
                        ...images
                    ]
                }
            ])
        };
        setTitle("");
        setDescription("");
    }

    const values = {
        bool, setBool,
        modal, closeModal,
        openModal,
        title, setTitle,
        description, setDescription,
        images, setImages,
        addToForm, imgArr,
        listHeight
    };

    return (
        <ContextHome.Provider value={values}>
            {children}
        </ContextHome.Provider>
    )
}
