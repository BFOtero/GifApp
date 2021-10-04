import React from 'react'

const GifGridItem = ({id, title, images}) => {
    return (
        <div className='card animate__animated animate__fadeInDown '>
            <img src={images?.downsized_medium.url}  alt={title} /> 
            <p>
                {title}
            </p>
        </div>
    )
}

export default GifGridItem
