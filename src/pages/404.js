import React from 'react';
import Layout from '@theme/Layout';

export default function NotFound() {
  return (
    <Layout title="Em Construção">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
        textAlign: 'center',
        padding: '2rem',
      }}>
        <h1>🚧 Em Construção</h1>
        <p>Estamos trabalhando para trazer conteúdo em breve.</p>
        <p>Volte mais tarde para ver novidades!</p>
      </div>
    </Layout>
  );
}
