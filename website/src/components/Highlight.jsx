import React from 'react';

export function Highlight({ children, color = '#67BFEC' }) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '4px',
        color: '#fff',
        padding: '0.1rem 0.3rem',
      }}>
      {children}{' '}
    </span>
  );
}
