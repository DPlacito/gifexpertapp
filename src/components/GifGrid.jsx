
import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }


    useEffect(() => {
        getImages();
    }, [])


    getGifs(category);


    return (
        <>
            <h3>{category}</h3>

            <ol>
                {
                    images.map(img => (
                        <li key={img.id}>{img.title}</li>
                    ))
                }

            </ol>

        </>
    )
}
