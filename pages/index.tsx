
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
        borderRadius: '28px',
        background: 'rgba(255, 255, 255, 0.3)',
        padding: '28px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.08)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.04)';
          e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 215, 0, 0.15)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.08)';
        }}
      >
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          padding: '24px',
          boxShadow: 'inset 0 0 12px rgba(0, 0, 0, 0.04)',
          width: '320px',
          height: '340px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            padding: '16px',
            marginBottom: '20px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.03)'
          }}>
            <Image src="/brain.png" alt="SkySync Brain" width={160} height={160} />
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
