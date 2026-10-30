import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      className="tone-dark"
      style={{
        minHeight: '100svh',
        display: 'grid',
        placeItems: 'center',
        padding: '2rem',
        background: 'var(--bg)',
        color: 'var(--fg)',
        textAlign: 'center',
      }}
    >
      <div style={{ display: 'grid', gap: '1.5rem', justifyItems: 'center' }}>
        <p className="eyebrow">404</p>
        <h1 className="display" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
          This page <em>left the stage.</em>
        </h1>
        <Link href="/" className="btn btnPrimary">
          Back to the portfolio
        </Link>
      </div>
    </main>
  );
}
