import React from 'react'
import useFechGifs from '../Hooks/useFechGifs'
 import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const {data:images, loading} = useFechGifs( category );

    console.log(images)
    return (
        <>  
            <h3> { category }</h3> 
            {loading && <p>loading</p>}
            <div className="card-grid">
                {
                    images.map( image => (
                        <GifGridItem 
                            key={image.id}
                            {...image}
                        />
                    ))
                }   
            </div>
        </>
    )
}

export default GifGrid
