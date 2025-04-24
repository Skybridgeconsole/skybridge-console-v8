
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
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '12px',
          flexGrow: 1,
        }}>
          {[...Array(10)].map((_, i) => (
            <div key={i} style={{
              borderRadius: '12px',
              background: '#ffffff',
              border: '1px solid rgba(0,0,0,0.07)',
              boxShadow: '0 4px 10px rgba(0,0,0,0.025)',
              textAlign: 'center',
              padding: '12px 6px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 12px 20px rgba(255,215,0,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.025)';
              }}
            >
              <Image src="/brain.png" alt="Brain" width={50} height={50} />
              <h3 style={{ margin: '10px 0 4px', fontSize: '13px' }}>Module {i + 1}</h3>
              <p style={{ fontSize: '10px', color: '#555' }}>The Power Core of Skybridge</p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '20px',
          padding: '14px 18px',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.45)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(0,0,0,0.06)',
          borderRadius: '10px',
          fontStyle: 'italic',
          fontSize: '12px',
          color: '#333',
          boxShadow: '0 1px 5px rgba(0, 0, 0, 0.05)'
        }}>
          “The bridge between dreams and reality is built by vision, sacrifice, and God-given purpose.” — Skybridge Empire
        </div>
      </div>
    </div>
  );
}
