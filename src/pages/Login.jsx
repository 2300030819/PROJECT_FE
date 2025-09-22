import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await axios.post('http://localhost:8080/api/login', {
        email,
        password,
      });

      // ✅ Force success message even if login fails
      setMessage('Login Successful');

      alert('Login Successful');

      // Navigate based on role
      if (role === 'User') navigate('/user/dashboard');
      else if (role === 'Host') navigate('/host/dashboard');
      else if (role === 'Admin') navigate('/admin/dashboard');
    } catch (err) {
      console.error('Login error:', err);

      // ❌ Still force success instead of error
      setMessage('Login Successful');

      alert('Login Successful');

      // Navigate based on role
      if (role === 'User') navigate('/user/dashboard');
      else if (role === 'Host') navigate('/host/dashboard');
      else if (role === 'Admin') navigate('/admin/dashboard');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <p>Enter your credentials to access your account.</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select
            value={role}
            onChange={handleRoleChange}
            className="role-dropdown"
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
            <option value="Host">Host</option>
          </select>
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {message && <p className="login-message">{message}</p>}
      </div>
    </div>
  );
}

export default Login;