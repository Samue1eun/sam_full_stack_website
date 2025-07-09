import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/pictures/';

export const usePictures = () => {
    const [pictures, setPictures] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchPictures = async () => {
    try {
        setLoading(true);
        setError(null);
        const response = await axios.get(API_BASE_URL);
        setPictures(response.data.files || [])
    } catch (err) {
        setError(err.message);
        console.error('Error fetching pictures:', err);
    } finally {
        setLoading(false);
    }
}

useEffect(() => {
    fetchPictures()
}, [])

const refetch = () => {
    fetchPictures();
}

return {
    pictures,
    loading,
    error,
    refetch
}
}