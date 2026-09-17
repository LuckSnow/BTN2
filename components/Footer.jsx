import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid rgba(99, 102, 241, 0.15)",
        padding: "40px 0 24px",
        marginTop: "auto",
      }}
    >
      <div className="container-custom">
        {/* Top Section */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "32px",
            marginBottom: "32px",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
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
                style={{ fontWeight: "700", fontSize: "18px", color: "#e2e8f0" }}
              >
                Thai<span className="gradient-text">Tuan</span>
              </span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", maxWidth: "240px" }}>
              Full-stack developer đam mê xây dựng ứng dụng web hiện đại và sáng tạo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: "var(--text-primary)",
                fontWeight: "600",
                fontSize: "14px",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Điều hướng
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#6366f1")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--text-muted)")}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              style={{
                color: "var(--text-primary)",
                fontWeight: "600",
                fontSize: "14px",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Liên hệ
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                📧 tuan.n23dcpt054@ptit.edu.vn
              </span>
              <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                🎓 PTIT - N23DCPT054
              </span>
              <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                📍 Hà Nội, Việt Nam
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(99, 102, 241, 0.1)",
            paddingTop: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: "13px" }}>
            © {currentYear} Nguyen Thai Tuan. All rights reserved.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "13px" }}>
            Built with <span className="gradient-text" style={{ fontWeight: "600" }}>Next.js</span> &amp;{" "}
            <span className="gradient-text" style={{ fontWeight: "600" }}>Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
