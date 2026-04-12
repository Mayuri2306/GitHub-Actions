import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      
      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>My Portfolio</h2>
        <div>
          <a href="#" style={{ margin: "10px", color: "white" }}>Home</a>
          <a href="#" style={{ margin: "10px", color: "white" }}>Projects</a>
          <a href="#" style={{ margin: "10px", color: "white" }}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ marginTop: "50px" }}>
        <h1>Hello, I'm a DevOps Engineer 🚀</h1>
        <p>I build scalable cloud systems and CI/CD pipelines</p>
        <button 
          onClick={() => setMessage("Thanks for visiting my portfolio!")}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            background: "#00c6ff",
            color: "white",
            cursor: "pointer"
          }}
        >
          Click Me
        </button>
        <p>{message}</p>
      </section>

      {/* About */}
      <section style={{ marginTop: "40px" }}>
        <h2>About Me</h2>
        <p>
          I am passionate about DevOps, AWS, Kubernetes, Docker, and automation.
        </p>
      </section>

      {/* Skills */}
      <section style={{ marginTop: "40px" }}>
        <h2>Skills</h2>
        <ul>
          <li>AWS</li>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>Terraform</li>
          <li>Jenkins</li>
        </ul>
      </section>

      {/* Projects */}
      <section style={{ marginTop: "40px" }}>
        <h2>Projects</h2>
        <p>3-Tier Architecture using AWS</p>
        <p>CI/CD Pipeline with GitHub Actions</p>
      </section>

      {/* Contact */}
      <section style={{ marginTop: "40px" }}>
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
      </section>

    </div>
  );
}

export default App;