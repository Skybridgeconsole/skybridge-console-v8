
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#ffffff' }}>
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
      <div style={{ flex: 1, padding: '28px', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '28px' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Welcome, Mauro 👋</div>
          <div style={{ fontSize: '14px', color: '#666' }}>Weather: 🌤️ 78°F McAllen, TX</div>
        </div>

        {/* 4x3 Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '28px',
          justifyItems: 'center',
          alignItems: 'center'
        }}>
          {[...Array(12)].map((_, i) => (
            <div key={i} style={{
              height: '150px',
              width: '150px',
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 0 24px rgba(255, 255, 255, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              textAlign: 'center'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.04)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 255, 255, 0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 24px rgba(255, 255, 255, 0.35)';
              }}
            >
              <Image src="/brain.png" alt="Brain" width={48} height={48} />
              <h3 style={{ marginTop: '12px', fontSize: '13px', color: '#111' }}>Module {i + 1}</h3>
            </div>
          ))}
        </div>

        {/* Quotetrone */}
        <div style={{
          marginTop: '32px',
          padding: '18px',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '12px',
          border: '1px solid rgba(0,0,0,0.06)',
          backdropFilter: 'blur(10px)',
          fontSize: '13px',
          color: '#333',
          fontStyle: 'italic',
          boxShadow: '0 2px 12px rgba(0,0,0,0.05)'
        }}>
          <div>“The bridge between dreams and reality is built by vision, sacrifice, and God-given purpose.” — Skybridge Empire</div>
        </div>
      </div>
    </div>
  );
}
