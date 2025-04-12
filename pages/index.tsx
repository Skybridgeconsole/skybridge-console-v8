
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
        padding: '20px',
        borderRadius: '40px',
        background: '#ffffff',
        boxShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 0 60px rgba(255, 255, 255, 0.4)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 255, 255, 0.3)';
        }}
      >
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          textAlign: 'center',
          width: '300px',
          height: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{ marginBottom: '20px' }}>
            <Image src="/brain.png" alt="SkySync Brain" width={120} height={120} />
          </div>
          <h1 style={{ color: '#0a0a0a', fontSize: '28px', fontWeight: '700' }}>SkySync Brain</h1>
          <p style={{ color: '#555', fontSize: '16px' }}>Empire Intelligence Engine</p>
        </div>
      </div>
    </div>
  );
}
