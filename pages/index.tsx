
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', height: '100vh', background: '#fff' }}>
      {/* Sidebar */}
      <div style={{
        width: '220px',
        background: '#0a1a2f',
        padding: '20px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <div>
          <h2 style={{ color: '#f5cc52', fontSize: '18px' }}>Skybridge</h2>
          <nav style={{ marginTop: '40px' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ margin: '12px 0' }}>Dashboard</li>
              <li style={{ margin: '12px 0' }}>Modules</li>
              <li style={{ margin: '12px 0' }}>Settings</li>
            </ul>
          </nav>
        </div>
        <div style={{ fontSize: '12px', color: '#ccc' }}>© 2025 Skybridge</div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '30px', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Welcome, Mauro 👋</div>
          <div style={{ fontSize: '14px', color: '#666' }}>Weather: 🌤️ 78°F McAllen, TX</div>
        </div>

        {/* Module Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '20px',
          flexGrow: 1,
        }}>
          {[...Array(10)].map((_, i) => (
            <div key={i} style={{
              borderRadius: '18px',
              background: '#ffffff',
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.04)',
              textAlign: 'center',
              padding: '25px 10px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 20px 30px rgba(255,215,0,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.04)';
              }}
            >
              <Image src="/brain.png" alt="Brain" width={80} height={80} />
              <h3 style={{ margin: '12px 0 6px', fontSize: '16px' }}>Module {i + 1}</h3>
              <p style={{ fontSize: '12px', color: '#555' }}>The Power Core of Skybridge</p>
            </div>
          ))}
        </div>

        {/* Jumbotron / Quotetrone */}
        <div style={{
          marginTop: '30px',
          padding: '20px',
          textAlign: 'center',
          background: '#f8f8f8',
          borderRadius: '14px',
          fontStyle: 'italic',
          fontSize: '14px',
          boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.05)'
        }}>
          “The bridge between dreams and reality is built by vision, sacrifice, and God-given purpose.” — Skybridge Empire
        </div>
      </div>
    </div>
  );
}
