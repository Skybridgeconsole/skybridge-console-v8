
import { useState } from 'react';

type IncomeSource = {
  label: string;
  amount: string;
};

export default function IncomeBlockSimulator() {
  const [sources, setSources] = useState<IncomeSource[]>([{ label: '', amount: '' }]);

  const handleChange = (index: number, field: 'label' | 'amount', value: string) => {
    const updated = [...sources];
    updated[index][field] = value;
    setSources(updated);
  };

  const addSource = () => {
    setSources([...sources, { label: '', amount: '' }]);
  };

  const total = sources.reduce((sum, s) => sum + (parseFloat(s.amount) || 0), 0);

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 24, borderRadius: 12, background: '#fff', boxShadow: '0 8px 20px rgba(0,0,0,0.05)' }}>
      <h2 style={{ fontSize: '20px', marginBottom: 16 }}>🧱 Income Block Simulator</h2>
      {sources.map((s, i) => (
        <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
          <input
            type="text"
            placeholder="Income Source"
            value={s.label}
            onChange={e => handleChange(i, 'label', e.target.value)}
            style={{ flex: 1, padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
          />
          <input
            type="number"
            placeholder="$ Amount"
            value={s.amount}
            onChange={e => handleChange(i, 'amount', e.target.value)}
            style={{ width: 120, padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
          />
        </div>
      ))}
      <button onClick={addSource} style={{ padding: '8px 16px', borderRadius: 6, background: '#0a1a2f', color: '#fff', border: 'none', marginTop: 8 }}>+ Add Source</button>
      <hr style={{ margin: '20px 0' }} />
      <h3 style={{ fontSize: '16px' }}>Total Monthly Income: <span style={{ color: '#0a1a2f' }}>${total.toLocaleString()}</span></h3>
    </div>
  );
}
