export default function Home() {
  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <div style={styles.badge}>Showdown Labs LLC</div>
        <h1 style={styles.h1}>Innovation in action.</h1>
        <p style={styles.lead}>
          We incubate app-forward products — and help teams bring web & mobile
          experiences to life with thoughtful design and rock-solid engineering.
        </p>

        <div style={styles.ctaRow}>
          <a style={styles.primaryBtn} href="mailto:hello@showdownlabs.com">
            Contact us
          </a>
          <a style={styles.secondaryBtn} href="/work">
            What we do
          </a>
        </div>
      </header>

      <section id="work" style={styles.section}>
        <h2 style={styles.h2}>What we do</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.h3}>Product incubation</h3>
            <p style={styles.p}>
              We prototype, validate, and ship app-first products — fast, with
              craft and care.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.h3}>Mobile & web engineering</h3>
            <p style={styles.p}>
              Expo/React Native, modern web stacks, backend integrations, and
              performance-focused delivery.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.h3}>Design & UX</h3>
            <p style={styles.p}>
              Clean UI, strong information architecture, and onboarding that
              feels effortless.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.banner}>
          <div>
            <h2 style={{ ...styles.h2, marginBottom: 8 }}>Get in touch</h2>
            <p style={{ ...styles.p, margin: 0 }}>
              Email us at{" "}
              <a style={styles.link} href="mailto:hello@showdownlabs.com">
                hello@showdownlabs.com
              </a>
            </p>
          </div>
          <a style={styles.primaryBtn} href="mailto:hello@showdownlabs.com">
            Email Showdown Labs
          </a>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerRow}>
          <span style={styles.muted}>
            © {new Date().getFullYear()} Showdown Labs LLC
          </span>
          <span style={styles.footerLinks}>
            <a style={styles.footerLink} href="/terms">
              Terms of Use
            </a>
            <a style={styles.footerLink} href="/privacy">
              Privacy Policy
            </a>
          </span>
        </div>
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    minHeight: "100vh",
    padding: "56px 20px 24px",
    background:
      "radial-gradient(1200px 600px at 10% 0%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(900px 500px at 90% 10%, rgba(16,185,129,0.14), transparent 55%), #0b1020",
    color: "#eaf0ff",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  },
  header: { maxWidth: 980, margin: "0 auto 36px" },
  badge: {
    display: "inline-block",
    padding: "8px 12px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.06)",
    color: "rgba(234,240,255,0.92)",
    letterSpacing: 0.2,
    fontSize: 13,
    marginBottom: 18,
  },
  h1: {
    fontSize: 54,
    lineHeight: 1.05,
    margin: "0 0 14px",
    letterSpacing: -1.2,
  },
  lead: {
    fontSize: 18,
    lineHeight: 1.6,
    maxWidth: 780,
    margin: "0 0 22px",
    color: "rgba(234,240,255,0.82)",
  },
  ctaRow: { display: "flex", gap: 12, flexWrap: "wrap" },
  primaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 16px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 600,
    background:
      "linear-gradient(135deg, rgba(99,102,241,0.95), rgba(16,185,129,0.95))",
    color: "#071022",
    border: "1px solid rgba(255,255,255,0.16)",
  },
  secondaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 16px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 600,
    background: "rgba(255,255,255,0.06)",
    color: "rgba(234,240,255,0.92)",
    border: "1px solid rgba(255,255,255,0.16)",
  },
  section: { maxWidth: 980, margin: "0 auto 34px" },
  h2: { fontSize: 22, margin: "0 0 14px", letterSpacing: -0.2 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 14,
  },
  card: {
    padding: 18,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },
  h3: { margin: "0 0 8px", fontSize: 16 },
  p: { margin: 0, lineHeight: 1.55, color: "rgba(234,240,255,0.8)" },
  banner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    padding: 18,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.14)",
    background:
      "linear-gradient(135deg, rgba(99,102,241,0.18), rgba(16,185,129,0.14))",
  },
  link: { color: "rgba(234,240,255,0.95)" },
  footer: {
    maxWidth: 980,
    margin: "38px auto 0",
    paddingTop: 18,
    borderTop: "1px solid rgba(255,255,255,0.12)",
  },
  footerRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
    alignItems: "center",
  },
  muted: { color: "rgba(234,240,255,0.6)" },
  footerLinks: { display: "flex", gap: 14 },
  footerLink: { color: "rgba(234,240,255,0.85)", textDecoration: "none" },
};
