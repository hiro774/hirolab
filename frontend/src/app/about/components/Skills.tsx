const coreSkills = [
  { name: "TypeScript", symbol: "TS", tone: "blue" },
  { name: "Next.js", symbol: "N", tone: "ink" },
  { name: "Python", symbol: "Py", tone: "yellow" },
  { name: "Django", symbol: "dj", tone: "green" },
];
const skillGroups = [
  {
    label: "Language",
    symbol: "</>",
    items: ["HTML/CSS", "TypeScript", "Python", "GAS"],
  },
  {
    label: "Framework",
    symbol: "◇",
    items: ["React", "Next.js", "Django", "Flask"],
  },
  {
    label: "Database",
    symbol: "▤",
    items: ["Postgres", "MySql", "AWS Rds", "Subabase"],
  },
  {
    label: "DevOps",
    symbol: "↗",
    items: ["Docker", "Vercel", "Render", "Railway"],
  },
];

export default function Skills() {
  return (
    <section className="about-skills" aria-labelledby="skills-heading">
      <div className="about-skills-heading">
        <div>
          <p className="section-label">02 / TOOLBOX</p>
          <h2 id="skills-heading">制作を支える技術</h2>
        </div>
        <span className="about-skills-caption">SKILLS & TOOLS</span>
      </div>
      <div className="surface about-core">
        <h3>Core Skills</h3>
        <ul className="about-core-grid">
          {coreSkills.map((skill) => (
            <li key={skill.name} className="about-core-item">
              <span
                className={`about-skill-symbol about-skill-${skill.tone}`}
                aria-hidden="true"
              >
                {skill.symbol}
              </span>
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="about-skill-groups">
        {skillGroups.map((group) => (
          <section className="surface about-skill-group" key={group.label}>
            <span className="about-group-symbol" aria-hidden="true">
              {group.symbol}
            </span>
            <h3>{group.label}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
