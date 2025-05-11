import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let url = '';
    if (role === 'Admin') {
      url = 'http://localhost:8080/api/admin/login';
    } else if (role === 'User') {
      url = 'http://localhost:8080/api/users/login';
    } else if (role === 'Host') {
      url = 'http://localhost:8080/api/hosts/login'; // Update if host login is implemented
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.text();

      if (result.toLowerCase().includes('successful')) {
        alert(result);
        if (role === 'User') navigate('/user/dashboard');
        else if (role === 'Host') navigate('/host/dashboard');
        else if (role === 'Admin') navigate('/admin/dashboard');
      } else {
        alert(result);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed!');
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
      </div>
    </div>
  );
}

export default Login;
