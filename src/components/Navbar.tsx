import Image from "next/image";

const links = [
  { label: "About me", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Back to top">
          <Image
            className="brand-logo"
            src="/logo.png"
            alt="Portfolio logo"
            width={54}
            height={46}
            priority
          />
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
