import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    // 1. State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate(); // Hook to move between pages

    // 2. Handle input changes (updates state when you type)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // 3. Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Stop page from reloading
        try {
            // Send data to Spring Boot Backend
            const response = await axios.post('http://localhost:8080/auth/register', formData);
            
            console.log('Registration success:', response.data);
            alert('Registration Successful! Please Login.');
            
            // Redirect user to Login page
            navigate('/login');
            
        } catch (error) {
            console.error('Registration failed:', error);
            alert('Registration Failed: ' + (error.response?.data?.message || 'Server Error'));
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Register;