import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Dashboard({ user }) {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/auth/login')
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, {user?.name}!</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>

      <main className="dashboard-content">
        <div className="dashboard-card">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <Link href="/loan/eligibility">
              <a className="action-btn primary">Check Eligibility</a>
            </Link>
            <Link href="/loan/loan-limits">
              <a className="action-btn primary">Apply for Loan</a>
            </Link>
          </div>
        </div>

        <div className="dashboard-card">
          <h2>Your Details</h2>
          <div className="details-grid">
            <div className="detail-item">
              <label>Name:</label>
              <span>{user?.name}</span>
            </div>
            <div className="detail-item">
              <label>ID Number:</label>
              <span>{user?.idNumber || 'Not provided'}</span>
            </div>
            <div className="detail-item">
              <label>Monthly Income:</label>
              <span>KSH {user?.income || 'Not provided'}</span>
            </div>
            <div className="detail-item">
              <label>Education:</label>
              <span>{user?.education || 'Not provided'}</span>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .dashboard-container {
          min-height: 100vh;
          background-color: #f5f5f5;
        }
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 20px;
        }
        .dashboard-header h1 {
          margin: 0;
        }
        .logout-btn {
          padding: 8px 16px;
          background: white;
          color: #667eea;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
        }
        .dashboard-content {
          max-width: 1200px;
          margin: 20px auto;
          display: grid;
          gap: 20px;
        }
        .dashboard-card {
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .action-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .action-btn {
          padding: 12px 24px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
          cursor: pointer;
          display: inline-block;
        }
        .action-btn.primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .action-btn.primary:hover {
          opacity: 0.9;
        }
        .details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 15px;
        }
        .detail-item {
          padding: 10px;
          background: #f9f9f9;
          border-radius: 4px;
        }
        .detail-item label {
          display: block;
          color: #666;
          font-size: 12px;
          margin-bottom: 5px;
          text-transform: uppercase;
        }
        .detail-item span {
          display: block;
          color: #333;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}