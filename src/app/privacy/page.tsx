export default function Privacy() {
  return (
    <main style={styles.main}>
      <h1 style={styles.h1}>Privacy Policy</h1>
      <p style={styles.p}>
        Showdown Labs LLC (“we”, “us”) operates websites and applications we build and
        incubate. This policy explains how we handle information when you visit our
        site or use our products.
      </p>

      <h2 style={styles.h2}>Information we may collect</h2>
      <ul style={styles.ul}>
        <li style={styles.li}>Contact details you send us (like email).</li>
        <li style={styles.li}>Basic usage data (device/browser logs) for security and reliability.</li>
      </ul>

      <h2 style={styles.h2}>How we use information</h2>
      <ul style={styles.ul}>
        <li style={styles.li}>To respond to inquiries and provide support.</li>
        <li style={styles.li}>To operate, maintain, and improve our products.</li>
        <li style={styles.li}>To comply with legal obligations.</li>
      </ul>

      <h2 style={styles.h2}>Your choices</h2>
      <p style={styles.p}>
        You can request access, correction, or deletion of your information by emailing{" "}
        <a style={styles.link} href="mailto:hello@showdownlabs.com">hello@showdownlabs.com</a>.
      </p>

      <h2 style={styles.h2}>Contact</h2>
      <p style={styles.p}>
        Showdown Labs LLC •{" "}
        <a style={styles.link} href="mailto:hello@showdownlabs.com">hello@showdownlabs.com</a>
      </p>
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
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
    maxWidth: 900,
    margin: "0 auto",
  },
  h1: { fontSize: 36, margin: "0 0 14px" },
  h2: { fontSize: 18, margin: "22px 0 10px" },
  p: { lineHeight: 1.6, color: "rgba(234,240,255,0.82)" },
  ul: { lineHeight: 1.7, color: "rgba(234,240,255,0.82)" },
  li: { marginBottom: 6 },
  link: { color: "rgba(234,240,255,0.95)" },
};
