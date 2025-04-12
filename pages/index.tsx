
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f0f0' }}>
      <div style={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '20px',
        padding: '50px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>EMPIRE BLOCK ACTIVE</h1>
        <h2 style={{ color: '#555', marginBottom: '20px' }}>SKYBRIDGE CONSOLE V8</h2>
        <Image src="/brain.png" alt="Brain" width={200} height={200} />
      </div>
    </div>
  );
}
