import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";

function Gallery() {
    const currentCategory = {
        name: "commercial", description: "Photos of grocery stores, food trucks, and other commercial projects",}
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div className="flex-row">
                <img alt="commerical example" src={photo} className="img-thumbnail mx-1"/>
            </div>
        </section>
    );
}


export default Gallery;