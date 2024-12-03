/**
 * @copyright 2024 Aung Chan Myae
 * @license Apache-2.0
 */

import SkillCard from "./SkillCard";

/**
 * Components
 */

const skillItem = [
  {
    imgSrc: "/html.svg",
    label: "HTML",
    desc: "User Interface",
  },
  {
    imgSrc: "/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/typescript.svg",
    label: "TypeScript",
    desc: "JavaScript Framework",
  },
  {
    imgSrc: "/nextjs.svg",
    label: "NextJS",
    desc: "React Framework",
  },
  {
    imgSrc: "/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
