import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/docs/react", label: "Docs" },
];

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(10, 10, 15, 0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(99, 102, 241, 0.15)",
      }}
    >
      <div
        className="container-custom"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "800",
              fontSize: "16px",
              color: "white",
            }}
          >
            T
          </div>
          <span
            style={{
              fontWeight: "700",
              fontSize: "18px",
              color: "#e2e8f0",
            }}
          >
            Thai<span className="gradient-text">Tuan</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
                color: "#94a3b8",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#e2e8f0";
                e.target.style.background = "rgba(99, 102, 241, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#94a3b8";
                e.target.style.background = "transparent";
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="btn-primary"
            style={{ padding: "8px 20px", fontSize: "14px", marginLeft: "8px" }}
          >
            Liên hệ
          </Link>
        </nav>
      </div>
    </header>
  );
}
