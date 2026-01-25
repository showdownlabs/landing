export default function Terms() {
  return (
    <main style={styles.main}>
      <h1 style={styles.h1}>Terms of Use</h1>
      <p style={styles.p}>
        These Terms govern your use of Showdown Labs LLC websites and any products we
        publish or incubate. By using our site, you agree to these Terms.
      </p>

      <h2 style={styles.h2}>Use of the site</h2>
      <p style={styles.p}>
        Please use our site lawfully and do not attempt to disrupt, reverse engineer, or
        misuse our services.
      </p>

      <h2 style={styles.h2}>No warranties</h2>
      <p style={styles.p}>
        Our site is provided “as is” without warranties of any kind, to the extent
        permitted by law.
      </p>

      <h2 style={styles.h2}>Limitation of liability</h2>
      <p style={styles.p}>
        To the extent permitted by law, Showdown Labs LLC will not be liable for
        indirect, incidental, or consequential damages arising from your use of the site.
      </p>

      <h2 style={styles.h2}>Contact</h2>
      <p style={styles.p}>
        Questions? Email{" "}
        <a style={styles.link} href="mailto:hello@showdownlabs.com">hello@showdownlabs.com</a>.
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
  link: { color: "rgba(234,240,255,0.95)" },
};
