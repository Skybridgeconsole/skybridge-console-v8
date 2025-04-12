
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
        borderRadius: '40px',
        padding: '80px',
        background: 'rgba(255, 255, 255, 0.05)',
        boxShadow: '0 0 30px rgba(255, 215, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        textAlign: 'center',
        cursor: 'pointer',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 0 50px rgba(255, 215, 0, 0.2)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.1)';
        }}
      >
        <div style={{ marginBottom: '30px' }}>
          <Image src="/brain.png" alt="SkySync Brain" width={200} height={200} />
        </div>
        <h1 style={{ color: '#0a0a0a', fontSize: '30px', fontWeight: '700' }}>SkySync Brain</h1>
        <p style={{ color: '#555', fontSize: '18px' }}>Empire Intelligence Engine</p>
      </div>
    </div>
  );
}
