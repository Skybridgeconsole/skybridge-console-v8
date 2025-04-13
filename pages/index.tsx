
import Image from 'next/image';

// Skybridge Master Block V3++ ULTRA Final Verified Version 1.0.1

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#ffffff',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{
        padding: '12px',
        borderRadius: '35px',
        background: '#ffffff',
        boxShadow: '0 0 40px rgba(255, 255, 255, 0.25)',
        border: '2px solid rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        cursor: 'pointer',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 0 70px rgba(255, 255, 255, 0.4)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 255, 255, 0.25)';
        }}
      >
        <div style={{
          background: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 4px 25px rgba(0, 0, 0, 0.05)',
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
            <Image src="/brain-premium.png" alt="SkySync Brain" width={100} height={100} />
          </div>
          <h1 style={{ 
              color: '#0a0a0a', 
              fontSize: '28px', 
              fontWeight: '900', 
              letterSpacing: '1px', 
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'
            }}>
              SkySync Brain
          </h1>
          <p style={{ 
              color: '#555', 
              fontSize: '16px', 
              letterSpacing: '0.5px', 
              textShadow: '1px 1px 1px rgba(0, 0, 0, 0.05)'
            }}>
              Empire Intelligence Engine
          </p>
        </div>
      </div>
    </div>
  );
}
