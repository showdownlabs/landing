export default function DeleteAccount() {
  return (
    <main style={styles.main}>
      <h1 style={styles.h1}>Delete Your Cine League Account</h1>
      <p style={styles.p}>
        We respect your privacy. You can request to delete your Cine League account and all associated data at any time.
      </p>

      <h2 style={styles.h2}>What Gets Deleted</h2>
      <p style={styles.p}>
        When you request account deletion, we will permanently delete:
      </p>
      <ul style={styles.ul}>
        <li style={styles.li}>Your profile information (name, email, photo)</li>
        <li style={styles.li}>Your ballot submissions and voting history</li>
        <li style={styles.li}>Your league memberships and league-related data</li>
        <li style={styles.li}>Your user preferences and settings</li>
        <li style={styles.li}>Any connected integrations (Letterboxd sync)</li>
      </ul>

      <h2 style={styles.h2}>Data We Keep</h2>
      <p style={styles.p}>
        To comply with legal and regulatory requirements, we may retain:
      </p>
      <ul style={styles.ul}>
        <li style={styles.li}>Transaction logs (for up to 7 years for tax/legal compliance)</li>
        <li style={styles.li}>Anonymized usage analytics (cannot be linked to you)</li>
        <li style={styles.li}>Information needed for legal disputes or compliance</li>
      </ul>

      <h2 style={styles.h2}>How to Request Account Deletion</h2>
      <p style={styles.p}>
        You can request account deletion in two ways:
      </p>

      <h3 style={styles.h3}>Option 1: In-App Request (Recommended)</h3>
      <p style={styles.p}>
        Open the Cine League app, go to Settings, and tap "Delete Account". Fill out the form and submit your request directly. We'll process it within 30 days.
      </p>

      <h3 style={styles.h3}>Option 2: Email Support</h3>
      <p style={styles.p}>
        Send an email to{" "}
        <a style={styles.link} href="mailto:hello@showdownlabs.com?subject=Cine%20League%20Account%20Deletion%20Request">
          hello@showdownlabs.com
        </a>{" "}
        with the subject line "Cine League Account Deletion Request" and include:
      </p>
      <ul style={styles.ul}>
        <li style={styles.li}>Your email address associated with your account</li>
        <li style={styles.li}>Your username (if different from your email)</li>
        <li style={styles.li}>A brief note confirming you want to delete your account</li>
      </ul>

      <h2 style={styles.h2}>Processing Timeline</h2>
      <ul style={styles.ul}>
        <li style={styles.li}><strong>Immediate:</strong> Your account will be deactivated and inaccessible</li>
        <li style={styles.li}><strong>30 days:</strong> All personal data will be permanently deleted from our systems</li>
      </ul>

      <h2 style={styles.h2}>Questions?</h2>
      <p style={styles.p}>
        If you have questions about account deletion or our data practices, contact us at{" "}
        <a style={styles.link} href="mailto:hello@showdownlabs.com">
          hello@showdownlabs.com
        </a>.
      </p>

      <p style={styles.copyright}>
        Showdown Labs LLC • Last updated January 2026
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
  h3: { fontSize: 16, margin: "14px 0 8px", fontWeight: 600 },
  p: { lineHeight: 1.6, color: "rgba(234,240,255,0.82)", marginBottom: 12 },
  ul: { lineHeight: 1.7, color: "rgba(234,240,255,0.82)", marginBottom: 12 },
  li: { marginBottom: 6 },
  link: { color: "rgba(234,240,255,0.95)", textDecoration: "underline" },
  copyright: {
    fontSize: 12,
    color: "rgba(234,240,255,0.6)",
    marginTop: 40,
    borderTop: "1px solid rgba(234,240,255,0.2)",
    paddingTop: 20,
  },
};
