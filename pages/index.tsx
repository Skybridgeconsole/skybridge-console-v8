
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#ffffff',
    }}>
      <div style={{
        padding: '16px',
        borderRadius: '36px',
        background: '#ffffff',
        boxShadow: '0 0 30px rgba(255, 255, 255, 0.25)',
        border: '1px solid rgba(0, 0, 0, 0.03)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 0 50px rgba(255, 255, 255, 0.35)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.25)';
        }}
      >
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '24px',
          padding: '36px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
          border: '1px solid rgba(0, 0, 0, 0.03)',
          textAlign: 'center',
          width: '280px',
          height: '280px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{ marginBottom: '16px' }}>
            <Image src="/brain.png" alt="SkySync Brain" width={110} height={110} />
          </div>
          <h1 style={{ color: '#0a0a0a', fontSize: '26px', fontWeight: '700' }}>SkySync Brain</h1>
          <p style={{ color: '#555', fontSize: '15px' }}>Empire Intelligence Engine</p>
        </div>
      </div>
    </div>
  );
}
