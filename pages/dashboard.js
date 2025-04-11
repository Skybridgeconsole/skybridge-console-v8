export default function Dashboard() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'white',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        width: '340px',
        height: '340px',
        background: 'rgba(255, 255, 255, 0.3)',
        borderRadius: '24px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 20px 60px rgba(255, 215, 0, 0.2)',
        border: '1px solid rgba(255, 215, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseOver={(e) => {e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 30px 80px rgba(255, 215, 0, 0.3)';}}
      onMouseOut={(e) => {e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 215, 0, 0.2)';}}
      >
        <img src="/brain.png" alt="SkySync Brain Icon" style={{ width: '90px', marginBottom: '1rem' }} />
        <h2 style={{ color: '#0A2540', fontWeight: 'bold', fontSize: '1.7rem', letterSpacing: '1px' }}>SkySync Brain</h2>
        <p style={{ color: '#555', fontSize: '0.85rem' }}>AI Powered Command Core</p>
      </div>
    </div>
  );
}