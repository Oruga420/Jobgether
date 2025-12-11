import ThreeBackground from './components/ThreeBackground';
import DownloadButton from './components/DownloadButton';

export default function Home() {
  return (
    <main>
      <ThreeBackground />
      <DownloadButton />
      
      <div className="container" id="resume-content">
        <header>
          <h1>Alejandro De La Mora</h1>
          <h3>AI Solutions Architect | GenAI Content Developer</h3>
          <div className="contact-info">
            <a href="mailto:alex@seshwithfriends.org">alex@seshwithfriends.org</a>
            <span>•</span>
            <a href="tel:+14372433693">+1 437 243 3693</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/amorac/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span>•</span>
            <a href="http://www.eloruga.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
            <span>•</span>
            <a href="https://github.com/Oruga420" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </header>

        <section className="section">
          <h2>Professional Summary</h2>
          <p>
            AI Solutions Architect and Technical Educator with over 15 years of experience bridging software engineering, automation, and GenAI. I specialize in explaining complex technologies through hands-on content, having shipped over 120 productive GenAI applications. Expert in RAG, Agentic Workflows, and MCP, with a strong background in developer advocacy through the 'Sesh' community and public speaking engagements. I combine deep technical expertise in GCP, AWS, and LLMs with the ability to create engaging tutorials and demos that drive adoption and developer success.
          </p>
        </section>

        <section className="section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <p><strong>GenAI & LLMs:</strong> OpenAI, Anthropic, Gemini, RAG, Agentic Workflows, Model Context Protocol (MCP).</p>
            <p><strong>Development:</strong> Python, Next.js, Salesforce (Apex/Flows), Vercel, GCP, AWS.</p>
            <p><strong>Content & Advocacy:</strong> Technical Writing, Tutorial Creation, Public Speaking, Community Management.</p>
            <p><strong>Methodologies:</strong> Agile, Scrum, QA Engineering, Project Management.</p>
          </div>
        </section>

        <section className="section">
          <h2>Experience</h2>
          
          <div className="job">
            <h3>AI Solutions Architect | Assent</h3>
            <p className="job-meta">Canada | February 2025 - Present</p>
            <ul>
              <li><strong>GenAI Architecture:</strong> Designed and implemented secure, scalable GenAI stacks using OpenAI and Anthropic, featuring live RAG and agentic workflows to solve compliance challenges.</li>
              <li><strong>Operational Efficiency:</strong> Saved the company over <strong>20,000 man-hours annually</strong> by building and deploying custom MCP tools and automations that replaced repetitive manual tasks.</li>
              <li><strong>Adoption & Enablement:</strong> Drove internal AI adoption from <strong>47% to 97%</strong> by creating intuitive internal tools, comprehensive documentation, and conducting educational sessions for staff.</li>
              <li><strong>Governance:</strong> Established security patterns and audit trails, allowing teams to move experiments to production without compromising data safety.</li>
            </ul>
          </div>

          <div className="job">
            <h3>AI Solutions Architect & Founder | Sesh | AI Solutions</h3>
            <p className="job-meta">Toronto, Ontario | November 2021 - Present</p>
            <ul>
              <li><strong>Developer Advocacy & Education:</strong> Lead a community of <strong>100+ members</strong>, delivering free classes, live tutorials, and "open office hours" to teach GenAI workflows and automation.</li>
              <li><strong>Content Creation:</strong> Produce technical content and demos for communities such as <strong>Latinas in Tech</strong> and <strong>Somos Latinos in Tech Ottawa</strong>, translating cutting-edge AI concepts into practical developer skills.</li>
              <li><strong>Product Development:</strong> Architected and shipped over <strong>120 GenAI applications</strong> and 90+ chatbots for small businesses, utilizing Vercel, Next.js, and custom AI backends.</li>
              <li><strong>Pro Bono Innovation:</strong> Helped 40+ small businesses implement GenAI-powered workflows, removing manual work and democratizing access to enterprise-grade tools.</li>
            </ul>
          </div>

          <div className="job">
            <h3>Salesforce Consultant | Online Business Systems</h3>
            <p className="job-meta">Toronto, Ontario | June 2024 - November 2024</p>
            <ul>
              <li><strong>Agentforce Implementation:</strong> Configured AI assistants and copilot experiences, defining prompt strategies and data access to align with existing workflows.</li>
              <li><strong>Technical Documentation:</strong> Created reusable patterns and implementation guides to streamline the deployment of Marketing Cloud and AI features for new clients.</li>
            </ul>
          </div>

          <div className="job">
            <h3>Salesforce Manager | Globalization Partners</h3>
            <p className="job-meta">Ontario, Canada | November 2018 - November 2023</p>
            <ul>
              <li><strong>Platform Leadership:</strong> Managed a Salesforce environment with 1,000+ users, evolving from Administrator to Manager overseeing development and strategy.</li>
              <li><strong>Early AI Innovation:</strong> Led the development of "GIA" (internal chatbot) and implemented LLM-assisted coding patterns ("vibe coding") while maintaining strict governance.</li>
              <li><strong>Integration:</strong> Orchestrated complex integrations between CRM, Jira, and internal tools, laying the groundwork for future AI-driven automation.</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>Education & Certifications</h2>
          <ul>
            <li><strong>Ingenieria en Sistemas (LISI)</strong> | Universidad Marista de Mérida (2004 - 2007)</li>
            <li><strong>Certifications:</strong> Salesforce Certified AI Associate, Salesforce Certified Administrator (SCA)</li>
          </ul>
        </section>

        <section className="section">
          <h2>Key Projects & Community</h2>
          <ul>
            <li><strong>Sesh Community:</strong> Founder of a technical community focused on AI literacy, providing regular tutorials and demos on leveraging LLMs for productivity.</li>
            <li><strong>Public Speaking:</strong> Regular speaker on GenAI topics for tech diversity organizations (Latinas in Tech, Somos Latinos).</li>
            <li><strong>Open Source:</strong> Active GitHub contributor with numerous repositories demonstrating GenAI integrations and automation scripts.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
