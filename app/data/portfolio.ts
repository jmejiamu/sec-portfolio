export const projects = [
  {
    slug: "app-security-audit-notes",
    title: "App Security Audit Notes",
    detail:
      "OWASP checks, auth review, headers, input validation, and findings.",
    tag: "WEB",
    overview:
      "I built a repeatable security review workflow for a web application. The goal is to show how I inspect authentication, browser security headers, input handling, and common OWASP risks in a clear report format.",
    techStack: ["Linux", "Bash", "Node.js", "React Native"],
    architecture: ["Target app", "Manual review", "Findings report"],
    keyFeatures: [
      "Security checklist organized by risk category.",
      "Evidence-first notes for every finding.",
      "Clear remediation language for engineering teams.",
      "Reusable format for future app reviews.",
    ],
    security: [
      "Authentication and session review.",
      "Security header inspection.",
      "Input validation testing.",
      "OWASP Top 10 mapping.",
    ],
    demoResults: [
      "Placeholder for screenshots of findings.",
      "Placeholder for terminal output from checks.",
      "Placeholder for before-and-after remediation notes.",
    ],
    learned: [
      "Good security notes need evidence, risk, and a fix.",
      "Manual testing is easier when the workflow is repeatable.",
      "Developer experience helps explain security issues clearly.",
    ],
    githubUrl: "https://github.com/",
  },
  {
    slug: "network-traffic-analysis",
    title: "Network Traffic Analysis",
    detail: "Packet captures reviewed for DNS, ports, sessions, and anomalies.",
    tag: "PCAP",
    overview:
      "I built a packet-analysis workflow for reviewing network captures and documenting suspicious patterns. The goal is to practice triage skills used in SOC and blue-team environments.",
    techStack: ["Linux", "Bash", "Node.js", "React Native"],
    architecture: ["Capture traffic", "Inspect packets", "Summarize activity"],
    keyFeatures: [
      "Host and conversation mapping.",
      "DNS request review.",
      "Port and protocol summary.",
      "Short escalation notes for suspicious activity.",
    ],
    security: [
      "DNS anomaly detection.",
      "Unexpected port exposure review.",
      "Suspicious connection triage.",
    ],
    demoResults: [
      "Placeholder for Wireshark screenshots.",
      "Placeholder for tcpdump command output.",
      "Placeholder for traffic summary metrics.",
    ],
    learned: [
      "Network context matters before calling traffic suspicious.",
      "Short timelines make packet analysis easier to explain.",
      "Clear summaries are as important as tool usage.",
    ],
    githubUrl: "https://github.com/",
  },
  {
    slug: "linux-hardening-lab",
    title: "Linux Hardening Project",
    detail:
      "Users, services, firewall rules, SSH settings, and logging basics.",
    tag: "LINUX",
    overview:
      "I built a Linux hardening baseline for a small server-style environment. The project focuses on reducing unnecessary exposure and documenting secure configuration choices.",
    techStack: ["Linux", "Bash", "Node.js", "React Native"],
    architecture: ["Baseline host", "Harden config", "Verify logs"],
    keyFeatures: [
      "User and sudo access review.",
      "Service inventory and cleanup.",
      "Firewall rule documentation.",
      "SSH configuration baseline.",
    ],
    security: [
      "Least-privilege access review.",
      "Attack surface reduction.",
      "SSH hardening.",
      "Authentication log review.",
    ],
    demoResults: [
      "Placeholder for enabled firewall status.",
      "Placeholder for service inventory output.",
      "Placeholder for authentication log examples.",
    ],
    learned: [
      "Hardening is a process of reducing unnecessary risk.",
      "Verification matters after every configuration change.",
      "Good documentation makes security changes repeatable.",
    ],
    githubUrl: "https://github.com/",
  },
];

export const labs = [
  {
    slug: "ssh-hardening",
    title: "SSH Hardening",
    detail:
      "Disable password login, limit access, and review authentication logs.",
    tag: "ACCESS",
    objective:
      "Demonstrate how SSH access can be hardened on a Linux host.",
    tools: ["OpenSSH", "journalctl", "ufw"],
    vulnerability:
      "Password-based SSH login increases exposure to brute-force attempts and weak credential risk.",
    exploitTest:
      "Attempted SSH login with password authentication enabled, then reviewed authentication logs for failed attempts.",
    fix:
      "Enabled key-based authentication, disabled password login, restricted access with firewall rules, and restarted SSH safely.",
    resultTakeaway:
      "Remote access became more controlled, and the logs clearly showed why authentication monitoring matters.",
  },
  {
    slug: "nmap-service-scan",
    title: "Nmap Service Scan",
    detail:
      "Scan a test host, identify open ports, and explain service exposure.",
    tag: "RECON",
    objective:
      "Demonstrate how basic service discovery helps identify attack surface.",
    tools: ["Nmap", "ss", "systemctl"],
    vulnerability:
      "Unknown open services can expose a host to unnecessary risk and make incident response harder.",
    exploitTest:
      "Scanned a known test host, recorded open ports, and compared results against locally running services.",
    fix:
      "Stopped unneeded services and documented which ports should remain open for expected use.",
    resultTakeaway:
      "A simple scan can quickly reveal what a system exposes and what needs justification.",
  },
  {
    slug: "security-headers-check",
    title: "Security Headers Check",
    detail: "Review browser-facing headers and note missing protections.",
    tag: "WEB",
    objective:
      "Demonstrate how browser security headers reduce common client-side risk.",
    tools: ["curl", "DevTools", "Security headers"],
    vulnerability:
      "Missing headers can weaken protections around transport security, framing, content loading, and browser behavior.",
    exploitTest:
      "Requested the local app with curl and inspected response headers in browser developer tools.",
    fix:
      "Documented recommended headers such as Content-Security-Policy, X-Frame-Options, and Referrer-Policy.",
    resultTakeaway:
      "Header review is a small check, but it gives fast visibility into basic web hardening.",
  },
];

export const skills = [
  "Next.js",
  "React Native",
  "TypeScript",
  "React",
  "Linux",
  "Networking",
  "OWASP Top 10",
];
