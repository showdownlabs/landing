export default function Terms() {
  return (
    <main style={styles.main}>
      <h1 style={styles.h1}>Terms of Use</h1>
      <p style={styles.effective}>Effective February 14, 2026</p>

      <p style={styles.p}>
        These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of the
        websites, applications, and services operated by Showdown Labs LLC
        (&ldquo;Showdown Labs,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;), including the Cineleague mobile application. By accessing or
        using our services, you agree to be bound by these Terms. If you do not agree,
        please do not use our services.
      </p>

      <h2 style={styles.h2}>1. Eligibility</h2>
      <p style={styles.p}>
        You must be at least 13 years old to use our services. By using our services,
        you represent that you meet this age requirement. If you are under 18, you
        represent that you have your parent or guardian&rsquo;s permission to use our
        services.
      </p>

      <h2 style={styles.h2}>2. Accounts</h2>
      <p style={styles.p}>
        Some of our services require you to create an account. You are responsible for
        maintaining the confidentiality of your account credentials and for all activity
        that occurs under your account. You agree to provide accurate, current, and
        complete information and to notify us promptly if you suspect unauthorized use of
        your account.
      </p>

      <h2 style={styles.h2}>3. Acceptable Use</h2>
      <p style={styles.p}>You agree not to:</p>
      <ul style={styles.ul}>
        <li style={styles.li}>
          Use our services for any unlawful purpose or in violation of any applicable
          laws or regulations.
        </li>
        <li style={styles.li}>
          Interfere with, disrupt, or attempt to gain unauthorized access to our
          services, servers, or networks.
        </li>
        <li style={styles.li}>
          Reverse engineer, decompile, or disassemble any part of our services.
        </li>
        <li style={styles.li}>
          Use automated means (bots, scrapers, etc.) to access our services without our
          prior written consent.
        </li>
        <li style={styles.li}>
          Harass, abuse, or harm other users, or post content that is defamatory,
          obscene, or otherwise objectionable.
        </li>
        <li style={styles.li}>
          Impersonate any person or entity, or misrepresent your affiliation with any
          person or entity.
        </li>
      </ul>

      <h2 style={styles.h2}>4. User Content</h2>
      <p style={styles.p}>
        You retain ownership of any content you submit through our services (e.g.,
        ballots, votes, league names). By submitting content, you grant us a
        non-exclusive, worldwide, royalty-free license to use, display, and distribute
        that content as necessary to operate and improve our services. You are solely
        responsible for the content you submit and represent that you have the right to
        share it.
      </p>

      <h2 style={styles.h2}>5. Intellectual Property</h2>
      <p style={styles.p}>
        All content, features, and functionality of our services &mdash; including but
        not limited to text, graphics, logos, icons, and software &mdash; are the
        property of Showdown Labs or our licensors and are protected by copyright,
        trademark, and other intellectual property laws. You may not copy, modify,
        distribute, or create derivative works from our services without our prior
        written consent.
      </p>

      <h2 style={styles.h2}>6. Third-Party Services</h2>
      <p style={styles.p}>
        Our services may integrate with or contain links to third-party services (e.g.,
        Letterboxd). We are not responsible for the content, terms, or privacy practices
        of third-party services. Your use of third-party services is at your own risk
        and subject to their respective terms.
      </p>

      <h2 style={styles.h2}>7. Disclaimers</h2>
      <p style={styles.p}>
        Our services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
        without warranties of any kind, whether express or implied, including but not
        limited to implied warranties of merchantability, fitness for a particular
        purpose, and non-infringement. We do not warrant that our services will be
        uninterrupted, error-free, or secure.
      </p>

      <h2 style={styles.h2}>8. Limitation of Liability</h2>
      <p style={styles.p}>
        To the maximum extent permitted by law, Showdown Labs and its officers,
        directors, employees, and agents shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages, or any loss of profits,
        data, or goodwill, arising out of or in connection with your use of our
        services, regardless of the theory of liability.
      </p>

      <h2 style={styles.h2}>9. Indemnification</h2>
      <p style={styles.p}>
        You agree to indemnify, defend, and hold harmless Showdown Labs and its
        officers, directors, employees, and agents from any claims, liabilities,
        damages, losses, or expenses (including reasonable attorney&rsquo;s fees)
        arising out of your use of our services or your violation of these Terms.
      </p>

      <h2 style={styles.h2}>10. Termination</h2>
      <p style={styles.p}>
        We reserve the right to suspend or terminate your access to our services at any
        time, with or without cause and with or without notice. Upon termination, your
        right to use our services will immediately cease. Sections of these Terms that
        by their nature should survive termination (including disclaimers, limitation of
        liability, and indemnification) will continue to apply.
      </p>

      <h2 style={styles.h2}>11. Changes to These Terms</h2>
      <p style={styles.p}>
        We may update these Terms from time to time. If we make material changes, we
        will post the revised Terms on this page and update the effective date above.
        Your continued use of our services after any changes constitutes your acceptance
        of the updated Terms.
      </p>

      <h2 style={styles.h2}>12. Governing Law</h2>
      <p style={styles.p}>
        These Terms shall be governed by and construed in accordance with the laws of
        the State of Delaware, without regard to its conflict of law provisions. Any
        disputes arising under these Terms shall be resolved in the state or federal
        courts located in Delaware.
      </p>

      <h2 style={styles.h2}>13. Severability</h2>
      <p style={styles.p}>
        If any provision of these Terms is found to be unenforceable or invalid, that
        provision shall be limited or eliminated to the minimum extent necessary, and
        the remaining provisions shall remain in full force and effect.
      </p>

      <h2 style={styles.h2}>14. Contact Us</h2>
      <p style={styles.p}>
        If you have questions about these Terms, please contact us:
      </p>
      <p style={styles.p}>
        Showdown Labs LLC<br />
        Email:{" "}
        <a style={styles.link} href="mailto:hello@showdownlabs.com">hello@showdownlabs.com</a>
      </p>

      <p style={styles.copyright}>
        Showdown Labs LLC &bull; Last updated February 2026
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
  h1: { fontSize: 36, margin: "0 0 6px" },
  h2: { fontSize: 18, margin: "28px 0 10px" },
  effective: {
    fontSize: 14,
    color: "rgba(234,240,255,0.5)",
    marginBottom: 20,
  },
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
