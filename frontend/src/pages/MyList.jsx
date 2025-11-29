import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function MyList() {
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        // Fetch User's Watchlist
        axios.get('http://localhost:8080/watchlist', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(response => {
            setFavorites(response.data);
        })
        .catch(error => console.error("Error fetching watchlist:", error));
    }, [navigate]);

    const removeFromList = (movieId) => {
        const token = localStorage.getItem('token');
        axios.delete(`http://localhost:8080/watchlist/remove/${movieId}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(() => {
            alert("Removed from list!");
            // Refresh the list locally by filtering out the removed movie
            setFavorites(favorites.filter(m => m.id !== movieId));
        })
        .catch(err => alert("Failed to remove"));
    };

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <Link to="/" style={{ textDecoration: 'none', fontSize: '20px' }}>⬅ Back to Home</Link>
                <h1>My Watchlist</h1>
            </div>

            {favorites.length === 0 ? (
                <p>No movies saved yet. Go add some!</p>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {favorites.map(movie => (
                        <div key={movie.id} style={{ 
                            border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '200px', textAlign: 'center' 
                        }}>
                            <img src={movie.thumbnailUrl} alt={movie.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                            <h3>{movie.title}</h3>
                            <button 
                                onClick={() => removeFromList(movie.id)}
                                style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                            >
                                Remove ❌
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MyList;