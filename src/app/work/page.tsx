export default function Work() {
  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.h1}>What we do</h1>
        <p style={styles.lead}>
          Showdown Labs is a product studio focused on incubating app-first
          ideas and shipping thoughtful mobile experiences.
        </p>
      </header>

      <section style={styles.section}>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h2 style={styles.h2}>Product incubation</h2>
            <p style={styles.p}>
              We design, build, and launch app-forward products from concept to
              App Store — focusing on speed, clarity, and long-term quality.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.h2}>Mobile-first engineering</h2>
            <p style={styles.p}>
              Our work centers on modern mobile stacks, with deep experience in
              React Native, Expo, and scalable backend integrations.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.h2}>Design & user experience</h2>
            <p style={styles.p}>
              We believe great products feel obvious to use — intuitive flows,
              clean interfaces, and onboarding that respects users’ time.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.productCard}>
          <div>
            <span style={styles.badge}>Currently building</span>
            <h2 style={{ ...styles.h2, marginTop: 8 }}>Cine League</h2>
            <p style={styles.p}>
              A mobile game where friends compete by predicting award-season
              outcomes.
            </p>
          </div>

          <a
            style={styles.primaryBtn}
            href="https://cineleague.expo.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View product
          </a>
        </div>
      </section>

      <footer style={styles.footer}>
        <a style={styles.backLink} href="/">
          ← Back to home
        </a>
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    minHeight: "100vh",
    padding: "56px 20px",
    background: "#0b1020",
    color: "#eaf0ff",
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
    maxWidth: 1000,
    margin: "0 auto",
  },
  header: { marginBottom: 32 },
  h1: {
    fontSize: 42,
    margin: "0 0 12px",
    letterSpacing: -0.8,
  },
  lead: {
    fontSize: 18,
    lineHeight: 1.6,
    maxWidth: 760,
    color: "rgba(234,240,255,0.82)",
  },
  section: { marginBottom: 36 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 16,
  },
  card: {
    padding: 20,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },
  h2: { margin: "0 0 8px", fontSize: 18 },
  p: {
    margin: 0,
    lineHeight: 1.55,
    color: "rgba(234,240,255,0.8)",
  },
  productCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    padding: 22,
    borderRadius: 22,
    border: "1px solid rgba(255,255,255,0.14)",
    background:
      "linear-gradient(135deg, rgba(99,102,241,0.18), rgba(16,185,129,0.14))",
    flexWrap: "wrap",
  },
  badge: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    fontSize: 12,
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.08)",
    color: "rgba(234,240,255,0.9)",
  },
  primaryBtn: {
    padding: "12px 16px",
    borderRadius: 12,
    fontWeight: 600,
    textDecoration: "none",
    background:
      "linear-gradient(135deg, rgba(99,102,241,0.95), rgba(16,185,129,0.95))",
    color: "#071022",
    border: "1px solid rgba(255,255,255,0.16)",
  },
  footer: {
    marginTop: 48,
    paddingTop: 18,
    borderTop: "1px solid rgba(255,255,255,0.12)",
  },
  backLink: {
    color: "rgba(234,240,255,0.85)",
    textDecoration: "none",
  },
};
