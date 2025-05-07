
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Welcome() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dashboard');
    }, 4000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{
      height: '100vh',
      background: '#0a1a2f',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center'
    }}>
      <Image src="/brain.png" alt="Skybridge Logo" width={100} height={100} style={{ marginBottom: '30px' }} />
      <h1 style={{
        fontSize: '22px',
        fontWeight: 600,
        letterSpacing: '0.8px',
        marginBottom: '10px',
        opacity: 1,
        animation: 'fadeIn 2s ease-in-out forwards'
      }}>
        Skybridge Wealth Console
      </h1>
      <p style={{
        fontSize: '14px',
        fontStyle: 'italic',
        color: '#f5cc52',
        animation: 'fadeIn 3s ease-in-out forwards'
      }}>
        Empire Intelligence Engine Activated...
      </p>
      <div style={{
        marginTop: '30px',
        width: '60px',
        height: '60px',
        border: '4px solid rgba(255, 255, 255, 0.2)',
        borderTop: '4px solid #f5cc52',
        borderRadius: '50%',
        animation: 'spin 1.1s linear infinite'
      }}></div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
