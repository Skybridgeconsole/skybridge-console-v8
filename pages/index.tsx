
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
        borderRadius: '22px',
        background: 'rgba(255, 255, 255, 0.25)',
        padding: '20px',
        boxShadow: '0 0 14px rgba(0,0,0,0.04)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '1.2px solid rgba(0, 0, 0, 0.04)',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.045)';
          e.currentTarget.style.boxShadow = '0 0 34px rgba(255, 215, 0, 0.18)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 0 14px rgba(0,0,0,0.04)';
        }}
      >
        <div style={{
          background: '#ffffff',
          borderRadius: '18px',
          border: '1.4px solid rgba(0, 0, 0, 0.08)',
          width: '280px',
          height: '300px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.02)'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '14px',
            border: '1.5px solid rgba(0, 0, 0, 0.12)',
            padding: '16px',
            marginBottom: '18px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.035)'
          }}>
            <Image src="/brain.png" alt="SkySync Brain" width={200} height={200} />
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
            marginTop: '6px'
          }}>The Power Core of Skybridge</p>
        </div>
      </div>
    </div>
  );
}
