export const projects = [
  {
    slug: "app-security-audit-notes",
    title: "SSH Intrusion Detection & Monitoring System",
    detail:
      "Real-time SSH threat monitoring and brute-force detection using a Raspberry Pi, with a React Native dashboard for live security events.",
    tag: "CYBERSECURITY",
    overview:
      "A real-time SSH intrusion monitoring system built with a Raspberry Pi. It analyzes Linux authentication logs, detects potential brute-force attacks, and sends security events to a React Native dashboard for live monitoring.",
    techStack: [
      "Linux",
      "Vim",
      "Node.js",
      "React Native",
      "Python",
      "MongoDB",
      "Socket.io",
      "TypeScript",
      "Express",
    ],
    architecture: [
      "Raspberry Pi",
      "Python Monitor",
      "Express API",
      "MongoDB",
      "React Native Dashboard",
    ],
    keyFeatures: [
      "Real-time Linux authentication log monitoring.",
      "IP-based SSH brute-force detection.",
      "Real-time event streaming with Socket.io.",
      "Persistent monitoring with systemd.",
    ],
    security: [
      "SSH authentication log analysis.",
      "Brute-force attack detection.",
      "IP-based failed login tracking.",
      "Severity-based threat classification.",
    ],
    demoResults: [
      {
        src: "/projects/arch.png",
        alt: "React Native dashboard showing live SSH security events",
      },
      {
        src: "/projects/dashboard.png",
        alt: "React Native dashboard showing live SSH security events",
      },
    ],
    learned: [
      "How Linux authentication logs can reveal suspicious activity.",
      "How to detect brute-force patterns from failed SSH attempts.",
      "How to turn raw logs into actionable security events.",
    ],
    repositories: [
      {
        label: "Mobile Dashboard",
        type: "frontend",
        url: "https://github.com/jmejiamu/ssh-intrusion-monitor-app",
        branch: "main",
      },
      {
        label: "API",
        type: "backend",
        url: "https://github.com/jmejiamu/ssh-intrusion-monitor-api",
        branch: "main",
      },
      {
        label: "Raspberry Pi Monitor",
        type: "monitor",
        url: "https://github.com/jmejiamu/raspberry-pi-ssh-monitor",
        branch: "main",
      },
    ],
  },
  {
    slug: "nodejs-api-security-assessment",
    title: "Node.js API Security Assessment & Remediation",
    detail:
      "Security assessment of an existing Node.js REST API, focusing on vulnerable dependencies, JWT authentication, and secure coding practices.",
    tag: "CYBERSECURITY",
    overview:
      "An ongoing application security project focused on auditing a previously developed Node.js REST API. The assessment combines dependency vulnerability scanning, manual source code review, security documentation, and planned remediation and regression testing.",
    techStack: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Knex.js",
      "JWT",
      "npm audit",
      "Git",
    ],
    architecture: [
      "Node.js REST API",
      "Express Middleware",
      "JWT Authentication",
      "Knex.js",
      "PostgreSQL Database",
      "Security Audit Documentation",
    ],
    keyFeatures: [
      "Dependency vulnerability scanning using npm audit.",
      "Manual security review of JWT authentication middleware.",
      "Documented findings with evidence and remediation recommendations.",
      "Separate Git branches for the original code, security audit, and remediation.",
      "Planned security regression testing and before-and-after comparisons.",
    ],
    security: [
      "Identified a hardcoded JWT verification secret.",
      "Identified third-party dependencies with known security advisories.",
      "Reviewing JWT verification and authorization controls.",
      "Assessing authentication and dependency security risks.",
    ],
    demoResults: [],
    learned: [
      "How to identify vulnerable dependencies using npm audit.",
      "How hardcoded JWT secrets can compromise authentication security.",
      "How to document security findings and recommend remediation.",
      "How to organize a security assessment using separate Git branches.",
    ],
    repositories: [
      {
        label: "Original Backend",
        type: "backend",
        url: "https://github.com/jmejiamu/the-tech-blog-api",
        branch: "main",
      },
      {
        label: "Security Findings",
        type: "audit",
        url: "https://github.com/jmejiamu/the-tech-blog-api/tree/security/audit/security-audit",
        branch: "security/audit",
      },
      // {
      //   label: "Security Fixes",
      //   type: "remediation",
      //   url: "https://github.com/jmejiamu/the-tech-blog-api/tree/security/fixes",
      //   branch: "security/fixes",
      // },
      // {
      //   label: "Original Frontend",
      //   type: "frontend",
      //   url: "https://github.com/jmejiamu/the-tech-blog-frontend",
      //   branch: "main",
      // },
    ],
    status: "in-progress",
  },
];

export const labs = [
  {
    slug: "ssh-hardening",
    title: "SSH Hardening",
    detail:
      "Disable password login, limit access, and review authentication logs.",
    tag: "ACCESS",
    objective: "Demonstrate how SSH access can be hardened on a Linux host.",
    tools: ["OpenSSH", "journalctl", "ufw"],
    vulnerability:
      "Password-based SSH login increases exposure to brute-force attempts and weak credential risk.",
    exploitTest:
      "Attempted SSH login with password authentication enabled, then reviewed authentication logs for failed attempts.",
    fix: "Enabled key-based authentication, disabled password login, restricted access with firewall rules, and restarted SSH safely.",
    resultTakeaway:
      "Remote access became more controlled, and the logs clearly showed why authentication monitoring matters.",
  },
  // {
  //   slug: "nmap-service-scan",
  //   title: "Nmap Service Scan",
  //   detail:
  //     "Scan a test host, identify open ports, and explain service exposure.",
  //   tag: "RECON",
  //   objective:
  //     "Demonstrate how basic service discovery helps identify attack surface.",
  //   tools: ["Nmap", "ss", "systemctl"],
  //   vulnerability:
  //     "Unknown open services can expose a host to unnecessary risk and make incident response harder.",
  //   exploitTest:
  //     "Scanned a known test host, recorded open ports, and compared results against locally running services.",
  //   fix: "Stopped unneeded services and documented which ports should remain open for expected use.",
  //   resultTakeaway:
  //     "A simple scan can quickly reveal what a system exposes and what needs justification.",
  // },
  // {
  //   slug: "security-headers-check",
  //   title: "Security Headers Check",
  //   detail: "Review browser-facing headers and note missing protections.",
  //   tag: "WEB",
  //   objective:
  //     "Demonstrate how browser security headers reduce common client-side risk.",
  //   tools: ["curl", "DevTools", "Security headers"],
  //   vulnerability:
  //     "Missing headers can weaken protections around transport security, framing, content loading, and browser behavior.",
  //   exploitTest:
  //     "Requested the local app with curl and inspected response headers in browser developer tools.",
  //   fix: "Documented recommended headers such as Content-Security-Policy, X-Frame-Options, and Referrer-Policy.",
  //   resultTakeaway:
  //     "Header review is a small check, but it gives fast visibility into basic web hardening.",
  // },
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
