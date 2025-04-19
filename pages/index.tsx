
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
        borderRadius: '32px',
        background: 'rgba(255, 255, 255, 0.35)',
        boxShadow: '0 0 25px rgba(0,0,0,0.08)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        padding: '20px',
        transition: 'all 0.3s ease-in-out',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        cursor: 'pointer',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 0 50px rgba(255, 215, 0, 0.15)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 0 25px rgba(0,0,0,0.08)';
        }}
      >
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          width: '300px',
          height: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.03)'
        }}>
          <Image src="/brain.png" alt="SkySync Brain" width={220} height={220} />
          <h1 style={{
            color: '#0b1f33',
            fontSize: '32px',
            fontWeight: '700',
            fontFamily: 'sans-serif',
            margin: '16px 0 4px'
          }}>SkySync Brain</h1>
          <p style={{
            color: '#0b1f33',
            fontSize: '17px',
            fontWeight: '400',
            fontFamily: 'sans-serif'
          }}>The Power Core of Skybridge</p>
        </div>
      </div>
    </div>
  );
}
