import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MyList from './pages/MyList';
import AddMovie from './pages/AddMovie';
// ... other imports
import Watch from './pages/Watch'; // Import this

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ... keep your other routes ... */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/add" element={<AddMovie />} />
        
        {/* NEW ROUTE */}
        <Route path="/watch/:id" element={<Watch />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;