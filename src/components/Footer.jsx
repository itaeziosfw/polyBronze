// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '1rem 0',
        background: 'var(--color-secondary)',
        color: 'var(--color-text)',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}
    >
      <p>© {new Date().getFullYear()} PolyBronze. Todos os direitos reservados.</p>
    </footer>
  );
}
