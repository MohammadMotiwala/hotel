import React, { useState } from "react";
import Data from '../../components/GalleryData';
import Model from '../../components/GalleryData/Model';
import Layout from "../Layouts";
import "./gallery.css";

const Gallery = () => {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.link);
    };

    const handelRotationRight = () => {
        const totalLength = Data.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = Data.Data[0].link;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = Data.filter((item) => {
            return Data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].link;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const handelRotationLeft = () => {
        const totalLength = Data.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = Data.Data[totalLength - 1].link;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = Data.filter((item) => {
            return Data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].link;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    return (
        <Layout>
        <h1 className="pb-5">Our Gallery</h1>
            <div className="wrapper">
                {Data.map((item, index) => (
                    <div key={index} className="wrapper-images">
                        <img
                            src={item.link}
                            alt={item.text}
                            onClick={() => handleClick(item, index)}
                        />
                        <h2>{item.text}</h2>
                    </div>
                ))}
                <div>
                    {clickedImg && (
                        <Model
                            clickedImg={clickedImg}
                            handelRotationRight={handelRotationRight}
                            setClickedImg={setClickedImg}
                            handelRotationLeft={handelRotationLeft}
                        />
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default Gallery;