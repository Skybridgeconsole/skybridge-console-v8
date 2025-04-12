
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
        padding: '40px',
        borderRadius: '50px',
        background: '#ffffff',
        boxShadow: '0 0 80px rgba(255, 255, 255, 0.3)',
        border: '2px solid rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 0 120px rgba(255, 255, 255, 0.4)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 0 80px rgba(255, 255, 255, 0.3)';
        }}
      >
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '30px',
          padding: '60px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          textAlign: 'center'
        }}>
          <div style={{ marginBottom: '30px' }}>
            <Image src="/brain.png" alt="SkySync Brain" width={200} height={200} />
          </div>
          <h1 style={{ color: '#0a0a0a', fontSize: '30px', fontWeight: '700' }}>SkySync Brain</h1>
          <p style={{ color: '#555', fontSize: '18px' }}>Empire Intelligence Engine</p>
        </div>
      </div>
    </div>
  );
}
