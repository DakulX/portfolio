import React from "react";

export default function Portfolio() {
  return (
    <main className="bg-slate-900 text-slate-100 min-h-screen font-sans px-6 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold">Kulchandra “Daku” Gautam</h1>
        <p className="text-cyan-400 text-lg mt-2">
          BSc CSIT Student • Cybersecurity Enthusiast • Tech Creator
        </p>
      </header>

      <nav className="text-center mb-12 space-x-6 text-cyan-300 text-sm">
        <a href="#about" className="hover:underline">About</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#interests" className="hover:underline">Interests</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>

      <section id="about" className="mb-10 max-w-3xl mx-auto">
        <h2 className="text-2xl text-cyan-300 font-bold mb-4">About Me</h2>
        <p className="mb-4">
          I’m a final-year BSc CSIT student at Tribhuvan University, Kathmandu. I’m
          passionate about cybersecurity, networking, blockchain, and building
          practical tools. I’m currently interning at Nepal Telecom, contributing
          to a project focused on DDoS attack analysis and mitigation.
        </p>
        <p>
          I also create educational content on YouTube under the name
          <strong> "dakulx"</strong>, covering cybersecurity tools, automation,
          and blockchain topics. I previously made automobile-focused content via
          <strong> LawLessPiratesBikes</strong>.
        </p>
      </section>

      <section id="skills" className="mb-10 max-w-3xl mx-auto">
        <h2 className="text-2xl text-cyan-300 font-bold mb-4">Core Skills</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Networking & Cybersecurity:</strong> Kali Linux, Ubuntu Server, DDoS mitigation</li>
          <li><strong>Blockchain & Web3:</strong> Solidity, Hardhat, ThirdWeb</li>
          <li><strong>Automation & Data:</strong> Excel, Python, VBA</li>
          <li><strong>Content Creation:</strong> Video editing, scripting, YouTube SEO</li>
        </ul>
      </section>

      <section id="projects" className="mb-10 max-w-3xl mx-auto">
        <h2 className="text-2xl text-cyan-300 font-bold mb-4">Featured Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>DDoS Monitoring Tool:</strong> Real-time dashboard using open-source tools on Ubuntu.</li>
          <li><strong>Decentralized Voting dApp:</strong> Built using Solidity, ThirdWeb, and React.</li>
          <li><strong>Excel Investment Tracker:</strong> Dynamic dashboard for managing stock portfolios.</li>
        </ul>
      </section>

      <section id="interests" className="mb-10 max-w-3xl mx-auto">
        <h2 className="text-2xl text-cyan-300 font-bold mb-4">What I’m Into</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Cybersecurity labs & real-world attack simulations</li>
          <li>Building blockchain apps with real-world utility</li>
          <li>Creating tech tutorials & educational content</li>
          <li>Contributing to open-source projects</li>
        </ul>
      </section>

      <section id="contact" className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl text-cyan-300 font-bold mb-4">Let’s Connect</h2>
        <p>
          📧 Email: <a href="mailto:kulchandra.gautam@example.com" className="text-blue-400 hover:underline">kulchandra.gautam@example.com</a>
        </p>
        <p>
          🔗 LinkedIn: <a href="https://linkedin.com/in/kulchandradax" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/kulchandradax</a>
        </p>
        <p>
          ▶️ YouTube: <a href="https://www.youtube.com/@dakulx" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">youtube.com/@dakulx</a>
        </p>
      </section>

      <footer className="text-center text-slate-500 text-sm border-t border-slate-700 pt-6">
        &copy; 2025 Kulchandra Gautam • Built with ❤️
      </footer>
    </main>
  );
}
