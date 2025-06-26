import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Bem-vindo!">
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
        <p>Estamos preparando tudo para te entregar conteúdos incríveis.</p>
      </div>
    </Layout>
  );
}
