
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#f9f9f9',  // Lighter grayish white as per reference image
    }}>
      <div style={{
        padding: '20px',
        borderRadius: '32px',  // Sharper rounded corners
        background: '#ffffff',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        textAlign: 'center',
        width: '320px',
        height: '320px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{ marginBottom: '20px' }}>
          <Image src="/brain.png" alt="SkySync Brain" width={180} height={180} />
        </div>
        <h1 style={{ color: '#0b1f33', fontSize: '28px', fontWeight: '700', fontFamily: 'sans-serif' }}>SkySync Brain</h1>
        <p style={{ color: '#0b1f33', fontSize: '16px', fontWeight: '400', fontFamily: 'sans-serif' }}>The Power Core of Skybridge</p>
      </div>
    </div>
  );
}
