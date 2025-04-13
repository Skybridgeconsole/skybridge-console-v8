
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
        padding: '12px',
        borderRadius: '35px',
        background: '#ffffff',
        boxShadow: '0 0 25px rgba(255, 255, 255, 0.25)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        cursor: 'pointer',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.04)';
          e.currentTarget.style.boxShadow = '0 0 50px rgba(255, 255, 255, 0.35)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 255, 255, 0.25)';
        }}
      >
        <div style={{
          background: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '20px',
          padding: '35px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          width: '260px',
          height: '260px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{ marginBottom: '20px' }}>
            <Image src="/brain.png" alt="SkySync Brain" width={120} height={120} />
          </div>
          <h1 style={{ color: '#0a0a0a', fontSize: '26px', fontWeight: '700', letterSpacing: '0.5px' }}>SkySync Brain</h1>
          <p style={{ color: '#666', fontSize: '15px' }}>Empire Intelligence Engine</p>
        </div>
      </div>
    </div>
  );
}
