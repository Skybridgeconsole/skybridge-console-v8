
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{
      height: '100vh',
      background: '#f9f9f9',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        borderRadius: '24px',
        background: 'rgba(255, 255, 255, 0.25)',
        padding: '24px',
        boxShadow: '0 0 18px rgba(0,0,0,0.06)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1.5px solid rgba(0, 0, 0, 0.06)',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 215, 0, 0.15)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 0 18px rgba(0,0,0,0.06)';
        }}
      >
        <div style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1.5px solid rgba(0, 0, 0, 0.08)',
          width: '300px',
          height: '300px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          boxShadow: 'inset 0 0 12px rgba(0, 0, 0, 0.03)'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1.5px solid rgba(0, 0, 0, 0.1)',
            padding: '20px',
            marginBottom: '20px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)'
          }}>
            <Image src="/brain.png" alt="SkySync Brain" width={180} height={180} />
          </div>
          <h1 style={{
            color: '#0b1f33',
            fontSize: '30px',
            fontWeight: '700',
            fontFamily: 'sans-serif',
            margin: 0
          }}>SkySync Brain</h1>
          <p style={{
            color: '#0b1f33',
            fontSize: '16px',
            fontWeight: '400',
            fontFamily: 'sans-serif',
            marginTop: '8px'
          }}>The Power Core of Skybridge</p>
        </div>
      </div>
    </div>
  );
}
