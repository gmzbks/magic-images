"use client"
import React, { useState } from 'react';
import CreateImage from './CreateImage';


const App = () => {

    const [images, setImages] = useState([]);

    const handleImage = () => {
        const id= crypto.randomUUID();
        const newImages =[
            ...images,{ id:id , img:`https://picsum.photos/seed/${id}/200/300` }
        ]
   console.log(newImages)
        setImages(newImages);
    };

  
   
    return (
        <div>
            <div>
              <CreateImage handleImage ={handleImage} images={images}/>
            </div>
        </div>
    );
};

export default App;
