
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
        padding: '24px',
        borderRadius: '36px',
        background: 'rgba(255, 255, 255, 0.4)',
        boxShadow: '0 0 30px rgba(0, 0, 0, 0.08)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 0 60px rgba(255, 215, 0, 0.2)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 0, 0, 0.08)';
        }}
      >
        <div style={{
          background: 'white',
          borderRadius: '28px',
          padding: '36px',
          boxShadow: 'inset 0 0 12px rgba(0, 0, 0, 0.03)',
          border: '1px solid rgba(0, 0, 0, 0.06)',
          width: '340px',
          height: '340px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <div style={{ marginBottom: '24px' }}>
            <Image src="/brain.png" alt="SkySync Brain" width={200} height={200} />
          </div>
          <h1 style={{
            color: '#0b1f33',
            fontSize: '32px',
            fontWeight: '700',
            fontFamily: 'sans-serif',
            margin: 0
          }}>SkySync Brain</h1>
          <p style={{
            color: '#0b1f33',
            fontSize: '18px',
            fontWeight: '400',
            fontFamily: 'sans-serif',
            marginTop: '8px'
          }}>The Power Core of Skybridge</p>
        </div>
      </div>
    </div>
  );
}
