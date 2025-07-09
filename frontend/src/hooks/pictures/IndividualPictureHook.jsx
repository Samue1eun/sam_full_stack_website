import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/pictures/';

export const useIndividualPicture = (pictureId) => {
    const [imageUrl, setImageUrl] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if(!pictureId) return

        const fetchPictureUrl = async () => {
            try {
                setLoading(true)
                setError(null)
                const response = await axios.get(`${API_BASE_URL}${pictureId}`)
                setImageUrl(response.data.url)
            } catch (err) {
                setError(err.message)
                console.error('Error fetching picture URL:', err)
            } finally {
                setLoading(false)
            }
        }
        fetchPictureUrl()
    }, [pictureId])

    return {
        imageUrl,
        loading,
        error
    }
}

