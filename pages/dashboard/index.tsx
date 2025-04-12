
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Image src="/brain.png" alt="Brain" width={200} height={200} />
    </div>
  );
}
