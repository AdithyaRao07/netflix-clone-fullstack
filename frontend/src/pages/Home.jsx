import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Home() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        axios.get('http://localhost:8080/movies', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(response => setMovies(response.data))
        .catch(error => {
            if (error.response && error.response.status === 403) handleLogout();
        });
    }, [navigate]);

    const addToWatchlist = (movieId) => {
        const token = localStorage.getItem('token');
        axios.post(`http://localhost:8080/watchlist/add/${movieId}`, {}, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(response => alert(response.data))
        .catch(error => alert("Error adding to watchlist"));
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userEmail');
        navigate('/login');
    };

    // Filter for Search
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // --- SUB-COMPONENT FOR ROWS ---
    const MovieRow = ({ title, data }) => {
        if (data.length === 0) return null; // Don't show empty rows

        return (
            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#e5e5e5', marginBottom: '10px', fontSize: '24px' }}>{title}</h2>
                <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px' }}>
                    {data.map(movie => (
                        <div key={movie.id} style={{ minWidth: '200px', backgroundColor: '#222', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
                            <Link to={`/watch/${movie.id}`}>
                                <img 
                                    src={movie.thumbnailUrl} 
                                    alt={movie.title} 
                                    style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '4px', cursor: 'pointer', transition: 'transform 0.2s' }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </Link>
                            <h3 style={{ fontSize: '15px', margin: '10px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{movie.title}</h3>
                            <button 
                                onClick={() => addToWatchlist(movie.id)}
                                style={{ backgroundColor: '#333', color: 'white', padding: '5px', border: '1px solid #555', cursor: 'pointer', width: '100%' }}
                            >
                                + My List
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#111', minHeight: '100vh', color: 'white' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1 style={{ color: '#e50914', fontSize: '40px', fontWeight: 'bold' }}>NETFLIX</h1>
                <div>
                    <Link to="/mylist" style={{ marginRight: '20px', color: 'white', textDecoration: 'none' }}>My List</Link>
                    <Link to="/add" style={{ marginRight: '20px', color: 'white', textDecoration: 'none' }}>Admin</Link>
                    <button onClick={handleLogout} style={{ padding: '8px 15px', backgroundColor: '#e50914', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
                        Logout
                    </button>
                </div>
            </div>

            {/* Search Bar */}
            <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
                <input 
                    type="text" 
                    placeholder="Search movies..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ padding: '10px', width: '50%', fontSize: '16px', borderRadius: '4px', border: 'none', backgroundColor: '#333', color: 'white' }} 
                />
            </div>

            {/* If user is searching, show one big list. If not, show Categories */}
            {searchTerm ? (
                <MovieRow title="Search Results" data={filteredMovies} />
            ) : (
                <>
                    <MovieRow title="Action Blockbusters" data={movies.filter(m => m.genre.includes('Action'))} />
                    <MovieRow title="Sci-Fi & Thriller" data={movies.filter(m => m.genre.includes('Sci-Fi') || m.genre.includes('Thriller'))} />
                    <MovieRow title="Drama & Crime" data={movies.filter(m => m.genre.includes('Drama') || m.genre.includes('Crime'))} />
                    <MovieRow title="Animation" data={movies.filter(m => m.genre.includes('Animation'))} />
                </>
            )}
        </div>
    );
}

export default Home;