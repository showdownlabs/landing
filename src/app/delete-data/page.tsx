export default function DeleteData() {
  return (
    <main style={styles.main}>
      <h1 style={styles.h1}>Request Data Deletion</h1>
      <p style={styles.p}>
        You can request to delete specific data from your Cine League account without deleting your entire account. This gives you more control over your information.
      </p>

      <h2 style={styles.h2}>What Data Can Be Deleted</h2>
      <p style={styles.p}>
        You can request deletion of:
      </p>
      <ul style={styles.ul}>
        <li style={styles.li}>Your ballot submissions and voting history</li>
        <li style={styles.li}>Your league memberships</li>
        <li style={styles.li}>Connected integrations (Letterboxd sync data)</li>
        <li style={styles.li}>Profile photo and personal preferences</li>
      </ul>

      <h2 style={styles.h2}>What Remains After Data Deletion</h2>
      <p style={styles.p}>
        Your account will remain active with:
      </p>
      <ul style={styles.ul}>
        <li style={styles.li}>Your basic profile (username, email)</li>
        <li style={styles.li}>Ability to create new ballots and join leagues</li>
        <li style={styles.li}>Your login credentials</li>
      </ul>

      <h2 style={styles.h2}>Legal Data Retention</h2>
      <p style={styles.p}>
        We may retain certain data for legal compliance purposes:
      </p>
      <ul style={styles.ul}>
        <li style={styles.li}>Transaction logs (up to 7 years for tax/legal compliance)</li>
        <li style={styles.li}>Anonymized analytics (cannot be linked to you)</li>
        <li style={styles.li}>Data needed for disputes or investigations</li>
      </ul>

      <h2 style={styles.h2}>How to Request Data Deletion</h2>

      <h3 style={styles.h3}>Option 1: In-App Request (Recommended)</h3>
      <p style={styles.p}>
        Open the Cine League app, go to Settings, and tap "Delete My Data". Select the data you want to delete and submit your request. We'll process it within 30 days.
      </p>

      <h3 style={styles.h3}>Option 2: Email Support</h3>
      <p style={styles.p}>
        Send an email to{" "}
        <a style={styles.link} href="mailto:hello@showdownlabs.com?subject=Cine%20League%20Data%20Deletion%20Request">
          hello@showdownlabs.com
        </a>{" "}
        with the subject line "Cine League Data Deletion Request" and include:
      </p>
      <ul style={styles.ul}>
        <li style={styles.li}>Your email address associated with your account</li>
        <li style={styles.li}>Specific details about which data you want deleted</li>
        <li style={styles.li}>Any additional context (e.g., league ID, ballot date range)</li>
      </ul>

      <h2 style={styles.h2}>Processing Timeline</h2>
      <ul style={styles.ul}>
        <li style={styles.li}><strong>Immediate:</strong> Your request will be received and logged</li>
        <li style={styles.li}><strong>30 days:</strong> Your requested data will be permanently deleted</li>
        <li style={styles.li}><strong>Confirmation:</strong> We'll send you a confirmation email when deletion is complete</li>
      </ul>

      <h2 style={styles.h2}>Full Account Deletion</h2>
      <p style={styles.p}>
        If you want to delete your entire account instead, please visit our{" "}
        <a style={styles.link} href="/delete-account">
          Delete Account
        </a>{" "}
        page.
      </p>

      <h2 style={styles.h2}>Questions?</h2>
      <p style={styles.p}>
        If you have questions about data deletion or our data practices, contact us at{" "}
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
