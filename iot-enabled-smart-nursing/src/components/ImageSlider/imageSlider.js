import { Carousel } from 'react-responsive-carousel';
import {  useEffect, useState } from 'react';
import MainHeading from '../MainHeading/mainHaeding';
import Grid from '@mui/material/Grid';
import React from 'react'

var images = [];

const ImageSlider = () => {
    const [imagesList, setImagesList] = useState(null)
    useEffect(() => {
        let interval = setInterval(() => {
            fetch('http://127.0.0.1:8000/image_id/')
                .then(response => response.json())
                .then(data => {
                    setImagesList(data)
                    images = []
                    for (let i = 0; i < data.length; i++) {
                        images.push(`https://drive.google.com/uc?export=view&id=${data[i].ImageId}`)
                    }
                    console.log(images[0])
                })
                .catch(error => console.error(error));
        }, 10000)
        return () => clearInterval(interval);
    }, []);

    if (!images) {
        return <h1>Loading ...</h1>
    }

    return (


        <React.Fragment>

            <Grid xs={12}>
                <div>
                    <MainHeading text="Objects Detection" />
                </div>
            </Grid>
            <Grid xs={12}>
                <div className="margibBottom" >
                    <Carousel useKeyboardArrows={true}>
                        {images.map((URL, index) => (
                            <div className="slide">
                                <img alt="sample_file" src={URL} key={index} style={{ maxHeight: 200, objectFit: 'contain' }} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </Grid>
        </React.Fragment>
    );
};

export default ImageSlider