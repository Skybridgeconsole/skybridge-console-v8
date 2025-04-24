
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

      <div style={{ flex: 1, padding: '30px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Welcome, Mauro 👋</div>
          <div style={{ fontSize: '14px', color: '#666' }}>Weather: 🌤️ 78°F McAllen, TX</div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '16px',
          flexGrow: 1,
        }}>
          {[...Array(10)].map((_, i) => (
            <div key={i} style={{
              borderRadius: '14px',
              background: '#ffffff',
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 6px 14px rgba(0,0,0,0.03)',
              textAlign: 'center',
              padding: '18px 8px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.04)';
                e.currentTarget.style.boxShadow = '0 16px 26px rgba(255,215,0,0.18)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 14px rgba(0,0,0,0.03)';
              }}
            >
              <Image src="/brain.png" alt="Brain" width={60} height={60} />
              <h3 style={{ margin: '10px 0 5px', fontSize: '14px' }}>Module {i + 1}</h3>
              <p style={{ fontSize: '11px', color: '#555' }}>The Power Core of Skybridge</p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '26px',
          padding: '16px 20px',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0,0,0,0.07)',
          borderRadius: '12px',
          fontStyle: 'italic',
          fontSize: '13px',
          color: '#333',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)'
        }}>
          “The bridge between dreams and reality is built by vision, sacrifice, and God-given purpose.” — Skybridge Empire
        </div>
      </div>
    </div>
  );
}
