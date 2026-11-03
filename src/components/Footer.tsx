export default function Footer() {
  return (
    <footer className="footer container">
      <a className="brand" href="#top">
        <span className="brand-mark">✳</span>
        <span>Portfolio<span className="brand-period">.</span></span>
      </a>
      <p>Designed & built with care.</p>
      <span className="footer-year">© {new Date().getFullYear()}</span>
    </footer>
  );
}
