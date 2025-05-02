
import { useEffect, useState } from 'react';
import Image from 'next/image';

const quotes = [
  "The bridge between dreams and reality is built by vision, sacrifice, and God-given purpose.",
  "Great empires aren't built in a day—but every day matters.",
  "Your legacy is the blueprint someone else is waiting for.",
];

export default function Dashboard() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#ffffff' }}>
      {/* Sidebar */}
      <div style={{
        width: '220px',
        background: '#0a1a2f',
        padding: '20px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <div>
          <h2 style={{ color: '#f5cc52', fontSize: '16px' }}>Skybridge Wealth Console</h2>
          <nav style={{ marginTop: '40px' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ margin: '12px 0' }}>Dashboard</li>
              <li style={{ margin: '12px 0' }}>Modules</li>
              <li style={{ margin: '12px 0' }}>Settings</li>
            </ul>
          </nav>
        </div>
        <div style={{ fontSize: '12px', color: '#ccc' }}>© 2025 Skybridge</div>
      </div>

      {/* Main Area */}
      <div style={{ flex: 1, padding: '28px', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '28px' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Welcome, Mauro 👋</div>
          <div style={{ fontSize: '14px', color: '#666' }}>Weather: 🌤️ 78°F McAllen, TX</div>
        </div>

        {/* 4x3 Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '28px',
          justifyItems: 'center',
          alignItems: 'center'
        }}>
          {[...Array(12)].map((_, i) => (
            <div key={i} style={{
              height: '150px',
              width: '150px',
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              textAlign: 'center'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.05)';
              }}
            >
              <Image src="/brain.png" alt="Brain" width={48} height={48} />
              <h3 style={{ marginTop: '12px', fontSize: '13px', color: '#111' }}>Module {i + 1}</h3>
            </div>
          ))}
        </div>

        {/* Quotetrone */}
        <div style={{
          marginTop: '32px',
          padding: '20px',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.4)',
          borderRadius: '14px',
          border: '1px solid rgba(0,0,0,0.06)',
          backdropFilter: 'blur(16px)',
          fontSize: '13.5px',
          color: '#333',
          fontStyle: 'italic',
          fontWeight: 500,
          boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
          transition: 'opacity 0.5s ease'
        }}>
          <div key={quoteIndex}>{quotes[quoteIndex]}</div>
        </div>
      </div>
    </div>
  );
}
