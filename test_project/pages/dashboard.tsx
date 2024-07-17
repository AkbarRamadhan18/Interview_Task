import { useRouter } from 'next/router';

const Dashboard = () => {
    const router = useRouter();

    const handleLogout = () => {

        router.push('/login');
    };

    return (
        <div className="container">
            <header className="header">
                <h1>Dashboard</h1>
                <button className="logoutButton" onClick={handleLogout}>Logout</button>
            </header>
            <main className="dashboard">
                <div className="card">
                    <h3>Azzammil</h3>
                    <p>Teknik Komputer.</p>
                </div>
                <div className="card">
                    <h3>Akbar</h3>
                    <p>Politeknik Negeri Padang</p>
                </div>
                <div className="card">
                    <h3>Ramadhan</h3>
                    <p></p>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
