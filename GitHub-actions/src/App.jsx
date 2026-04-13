import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const fullText = "DevOps Engineer 🚀";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">

      {/* Navbar */}
      <nav className="navbar">
        <h2>My Portfolio</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero fade-in">
        <h1>
          Hi, I'm a <span className="typing">{text}</span>
        </h1>

        <p className="subtitle">
          I build scalable cloud systems and automate CI/CD pipelines.
        </p>

        <div className="hero-buttons">
          <a href="https://github.com/your-username" target="_blank">
            <button className="btn">GitHub</button>
          </a>

          <a href="/resume.pdf" download>
            <button className="btn secondary">Download Resume</button>
          </a>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          Passionate DevOps Engineer skilled in AWS, Docker, Kubernetes,
          Terraform, and CI/CD automation.
        </p>
      </section>

      {/* Skills */}
      <section className="section">
        <h2>Skills</h2>
        <div className="grid">
          <div className="card">AWS</div>
          <div className="card">Docker</div>
          <div className="card">Kubernetes</div>
          <div className="card">Terraform</div>
          <div className="card">Jenkins</div>
          <div className="card">GitHub Actions</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-grid">

          <div className="project-card">
            <h3>3-Tier Architecture on AWS</h3>
            <p>
              Deployed scalable architecture using EC2, RDS, and S3 with load balancing.
            </p>
            <div className="tags">
              <span>AWS</span>
              <span>NGINX</span>
              <span>MySQL</span>
            </div>
            <a href="http://44.243.28.101" target="_blank">Live Demo →</a>
          </div>

          <div className="project-card">
            <h3>CI/CD Pipeline</h3>
            <p>
              Automated build and deployment using GitHub Actions and self-hosted runners.
            </p>
            <div className="tags">
              <span>GitHub Actions</span>
              <span>CI/CD</span>
            </div>
            <a href="#" target="_blank">View Project →</a>
          </div>

          <div className="project-card">
            <h3>Kubernetes Deployment</h3>
            <p>
              Deployed containerized apps using Kubernetes with Ingress and services.
            </p>
            <div className="tags">
              <span>Kubernetes</span>
              <span>Docker</span>
            </div>
            <a href="#" target="_blank">View Project →</a>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>9617976164</h2>
        <p>mayurijhade104@gmail.com</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Mayuri Jhade | Built with ❤️</p>
      </footer>

    </div>
  );
}

export default App;