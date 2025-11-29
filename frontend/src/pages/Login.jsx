import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // 1. Send credentials to Backend
            const response = await axios.post('http://localhost:8080/auth/login', formData);
            
            // 2. Extract the Token from the response
            const token = response.data.token;
            console.log("Token received:", token);

            // 3. Save Token to LocalStorage (Browser's memory)
            localStorage.setItem('token', token);
            localStorage.setItem('userEmail', formData.email); // Optional: save email too

            alert('Login Successful!');
            
            // 4. Go to Home Page
            navigate('/');

        } catch (error) {
            console.error('Login failed:', error);
            alert('Invalid Credentials');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;