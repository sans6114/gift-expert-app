import {
  useEffect,
  useState,
} from 'react';

import { getGifts } from '../helpers/getGifts';

export const useFetchGifts = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {

        const fetchImages = async () => {
            try {
                const imagesGifts = await getGifts(category)
                setImages(imagesGifts)
            } catch (error) {
                console.error("Error fetching images:", error);
            } finally {
                setisLoading(false)
            }
        }
        fetchImages()

    }, [category])


    return {
        images,
        isLoading
    }
}