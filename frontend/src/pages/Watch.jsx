import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

function Watch() {
    const { id } = useParams(); // Get the ID from the URL (e.g., /watch/5)
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        axios.get(`http://localhost:8080/movies/${id}`)
            .then(response => setMovie(response.data))
            .catch(error => console.error("Error fetching movie:", error));
    }, [id, navigate]);

    // Helper to convert standard YouTube links to Embed format
    const getEmbedUrl = (url) => {
        if (!url) return "";
        // If it's already an embed link, return it
        if (url.includes("embed")) return url;
        // If it's a standard watch link, convert it
        // Example: https://www.youtube.com/watch?v=123 -> https://www.youtube.com/embed/123
        const videoId = url.split('v=')[1];
        if (videoId) {
            const cleanId = videoId.split('&')[0]; // Remove extra params
            return `https://www.youtube.com/embed/${cleanId}`;
        }
        return url;
    };

    if (!movie) return <div style={{color:'white'}}>Loading...</div>;

    return (
        <div style={{ padding: '20px', backgroundColor: '#111', minHeight: '100vh', color: 'white' }}>
            <Link to="/" style={{ color: '#aaa', textDecoration: 'none', fontSize: '18px' }}>⬅ Back to Home</Link>
            
            <div style={{ maxWidth: '1000px', margin: '20px auto' }}>
                {/* Video Player */}
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginBottom: '20px' }}>
                    <iframe 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        src={getEmbedUrl(movie.videoUrl)} 
                        title="Movie Player"
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Info Section */}
                <h1>{movie.title}</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#ccc', margin: '10px 0' }}>
                    <span style={{ border: '1px solid #ccc', padding: '2px 5px', fontSize: '12px' }}>{movie.rating} IMDB</span>
                    <span>{movie.year}</span>
                    <span>{movie.genre}</span>
                </div>
                
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#ddd' }}>
                    {movie.description}
                </p>
            </div>
        </div>
    );
}

export default Watch;