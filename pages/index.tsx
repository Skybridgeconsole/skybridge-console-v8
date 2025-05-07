
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', height: '100vh', background: '#fff' }}>
      <div style={{
        width: '200px',
        background: '#0a1a2f',
        padding: '20px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <div>
          <h2 style={{ color: '#f5cc52', fontSize: '16px' }}>Skybridge Wealth Console</h2>
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

      <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Welcome, Mauro 👋</div>
          <div style={{ fontSize: '14px', color: '#666' }}>Weather: 🌤️ 78°F McAllen, TX</div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '10px',
          padding: '0 10px'
        }}>
          {[...Array(12)].map((_, i) => (
            <div key={i} style={{
              borderRadius: '10px',
              background: '#ffffff',
              border: '1px solid rgba(0,0,0,0.07)',
              boxShadow: '0 3px 8px rgba(0,0,0,0.02)',
              textAlign: 'center',
              padding: '10px 4px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 14px rgba(255,215,0,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 3px 8px rgba(0,0,0,0.02)';
              }}
            >
              <Image src="/brain.png" alt="Brain" width={40} height={40} />
              <h3 style={{ margin: '8px 0 2px', fontSize: '12px' }}>Module {i + 1}</h3>
              <p style={{ fontSize: '9px', color: '#666' }}>The Power Core of Skybridge</p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '20px',
          padding: '12px 18px',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(0,0,0,0.05)',
          borderRadius: '10px',
          fontStyle: 'italic',
          fontSize: '11px',
          color: '#333',
          boxShadow: '0 1px 4px rgba(0, 0, 0, 0.04)'
        }}>
          “Your legacy is the blueprint someone else is waiting for.” — Skybridge Empire
        </div>
      </div>
    </div>
  );
}
