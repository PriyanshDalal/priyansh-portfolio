import agentic from "../assets/badges/agentic-ai.png";
import multiagent from "../assets/badges/multiagent.png";
import rag from "../assets/badges/rag.png";
import aiagents from "../assets/badges/ai-agents.png";

function Certifications() {
  const certs = [
    {
      image: agentic,
      title: "Make Agentic AI Work for You",
      desc: "Learned how AI agents can autonomously perform tasks, make decisions and improve productivity through intelligent automation."
    },
    {
      image: multiagent,
      title: "The Rise of Multiagent Systems",
      desc: "Explored collaboration between multiple AI agents and how they solve complex problems together."
    },
    {
      image: rag,
      title: "Introduction to Retrieval-Augmented Generation",
      desc: "Studied RAG architecture that combines information retrieval with Large Language Models for accurate responses."
    },
    {
      image: aiagents,
      title: "Unleashing the Power of AI Agents",
      desc: "Gained understanding of AI agent workflows, planning, reasoning and real-world AI applications."
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <h2>IBM Certifications</h2>

      <div className="certifications-grid">
        {certs.map((cert, index) => (
          <div className="cert-card" key={index}>
            <img
              src={cert.image}
              alt={cert.title}
              className="cert-img"
            />

            <h3>{cert.title}</h3>

            <p>{cert.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;