import { useEffect, useState } from "react"

const useFechGifs = (category) => {
    const [datos, setDatos] = useState({
        data:[],
        loading: true
    })
  
    useEffect(() => {
        const getGif = async() => {
            const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=9kxJDttM8RmMG0yxaRFrW9XHn2MaOE4Y`
            const res = await fetch(url);
            const {data} = await res.json();
            setDatos({
                data: data,
                loading: false
            })
        }
        getGif()
    }, [category])

    return datos;
}

export default useFechGifs
