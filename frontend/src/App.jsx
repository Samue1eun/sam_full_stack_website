import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [pictures, setPictures] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch pictures from your FastAPI backend
  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await axios.get('http://localhost:8000/pictures/')
        setPictures(response.data.files)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchPictures()
  }, [])

  // Get picture URL
  const getPictureUrl = async (pictureId) => {
    try {
      const response = await axios.get(`http://localhost:8000/pictures/${pictureId}`)
      return response.data.url
    } catch (err) {
      console.error('Error fetching picture URL:', err)
      return null
    }
  }

  if (loading) return <div className="text-center">Loading...</div>
  if (error) return <div className="text-center text-red-500">Error: {error}</div>

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold underline text-center mb-8">
          My Photo Gallery
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pictures.map((picture, index) => (
            <PictureCard 
              key={index} 
              picture={picture} 
              getPictureUrl={getPictureUrl}
            />
          ))}
        </div>
      </div>
    </>
  )
}

// Component to display individual pictures
function PictureCard({ picture, getPictureUrl }) {
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    const loadImage = async () => {
      const url = await getPictureUrl(picture.name)
      setImageUrl(url)
    }
    
    if (picture.name) {
      loadImage()
    }
  }, [picture.name, getPictureUrl])

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-lg font-semibold mb-2">{picture.name}</h3>
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={picture.name}
          className="w-full h-48 object-cover rounded"
        />
      )}
      <p className="text-sm text-gray-500 mt-2">
        Size: {picture.metadata?.size || 'Unknown'}
      </p>
    </div>
  )
}

export default App