
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#fff' }}>
      {/* Sidebar */}
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

      {/* Main Area */}
      <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Welcome, Mauro 👋</div>
          <div style={{ fontSize: '14px', color: '#666' }}>Weather: 🌤️ 78°F McAllen, TX</div>
        </div>

        {/* Square Module Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '18px',
          flexGrow: 1,
        }}>
          {[...Array(10)].map((_, i) => (
            <div key={i} style={{
              background: '#ffffff',
              borderRadius: '20px',
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 6px 12px rgba(0,0,0,0.04)',
              height: '140px',
              width: '140px',
              textAlign: 'center',
              padding: '14px 8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 16px 26px rgba(255,215,0,0.18)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.04)';
              }}
            >
              <Image src="/brain.png" alt="Brain" width={50} height={50} />
              <h3 style={{ marginTop: '10px', fontSize: '12px' }}>Module {i + 1}</h3>
            </div>
          ))}
        </div>

        {/* Quotetrone */}
        <div style={{
          marginTop: '24px',
          padding: '16px',
          textAlign: 'center',
          background: 'rgba(255,255,255,0.5)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          fontSize: '13px',
          color: '#333',
          fontStyle: 'italic',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
          “The bridge between dreams and reality is built by vision, sacrifice, and God-given purpose.” — Skybridge Empire
        </div>
      </div>
    </div>
  );
}
