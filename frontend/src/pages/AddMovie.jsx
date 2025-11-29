import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function AddMovie() {
    const navigate = useNavigate();
    const [movie, setMovie] = useState({
        title: '',
        description: '',
        genre: '',
        rating: '',
        year: '',
        thumbnailUrl: '',
        videoUrl: ''
    });

    const handleChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        
        try {
            await axios.post('http://localhost:8080/admin/movies/add', movie, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            alert('Movie Added Successfully!');
            navigate('/'); // Go back home
        } catch (error) {
            console.error(error);
            alert('Failed to add movie. Are you an ADMIN?');
        }
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#111', minHeight: '100vh', color: 'white' }}>
            <Link to="/" style={{ color: '#aaa', textDecoration: 'none' }}>⬅ Back to Home</Link>
            <h2 style={{ textAlign: 'center', color: 'red' }}>Add New Movie</h2>
            
            <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input name="title" placeholder="Title" onChange={handleChange} required style={inputStyle} />
                <textarea name="description" placeholder="Description" onChange={handleChange} required style={{...inputStyle, height: '80px'}} />
                <input name="genre" placeholder="Genre (Action, Drama...)" onChange={handleChange} required style={inputStyle} />
                <input name="rating" type="number" step="0.1" placeholder="Rating (e.g., 8.5)" onChange={handleChange} required style={inputStyle} />
                <input name="year" type="number" placeholder="Year" onChange={handleChange} required style={inputStyle} />
                <input name="thumbnailUrl" placeholder="Image URL" onChange={handleChange} required style={inputStyle} />
                <input name="videoUrl" placeholder="Video URL (YouTube etc.)" onChange={handleChange} required style={inputStyle} />
                
                <button type="submit" style={{ padding: '12px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer', fontSize: '16px' }}>
                    Add Movie
                </button>
            </form>
        </div>
    );
}

const inputStyle = {
    padding: '10px',
    backgroundColor: '#333',
    border: '1px solid #555',
    color: 'white',
    borderRadius: '4px'
};

export default AddMovie;