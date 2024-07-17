import { useState } from 'react';
import Router from 'next/router';
import styles from '../public/styles/login.module.css';

const Login = () => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Username, Password }),
            });

            if (!response.ok) {
                throw new Error('Invalid Username or Password');
            }


            Router.push('/dashboard');

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <h1 className={styles.loginTitle}>Login</h1>
            <form onSubmit={handleLogin} className={styles.loginForm}>
                <input type="text" placeholder="Username" value={Username} onChange={(e) => setUsername(e.target.value)} className={styles.inputField} />
                <input type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} className={styles.inputField} />
                <button type="submit" className={styles.loginButton}>Login</button>
            </form>
            {error && <p className={styles.errorMsg}>{error}</p>}
        </div>
    );
};

export default Login;
