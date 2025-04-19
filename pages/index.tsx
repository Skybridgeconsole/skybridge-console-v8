
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
        borderRadius: '18px',
        background: 'rgba(255, 255, 255, 0.2)',
        padding: '16px',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.06)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: 'translateZ(0)',
        cursor: 'pointer'
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 20px 45px rgba(255, 215, 0, 0.18)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.06)';
        }}
      >
        <div style={{
          background: '#ffffff',
          borderRadius: '14px',
          border: '1.2px solid rgba(0, 0, 0, 0.08)',
          width: '260px',
          height: '280px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          boxShadow: 'inset 0 0 8px rgba(0, 0, 0, 0.03)'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '10px',
            border: '1.2px solid rgba(0, 0, 0, 0.1)',
            padding: '6px',
            marginBottom: '12px',
            boxShadow: '0 3px 12px rgba(0, 0, 0, 0.05)'
          }}>
            <Image src="/brain.png" alt="SkySync Brain" width={195} height={195} />
          </div>
          <h1 style={{
            color: '#0b1f33',
            fontSize: '29px',
            fontWeight: '700',
            fontFamily: 'sans-serif',
            margin: 0
          }}>SkySync Brain</h1>
          <p style={{
            color: '#0b1f33',
            fontSize: '15px',
            fontWeight: '400',
            fontFamily: 'sans-serif',
            marginTop: '6px'
          }}>The Power Core of Skybridge</p>
        </div>
      </div>
    </div>
  );
}
