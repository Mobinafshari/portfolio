import "./skills.scss"

function Skills() {
  return (
    <section className="skills">
      <h3 className="skills-title">my skills</h3>
      <div className="skills-paragraph-wrapper">
        <p className="skills-paragraph">
          I have experience with this frontend technologies,and I’m always
          working to improve. I’m also excited to explore new fields, especially
          mobile development.
        </p>
      </div>
      <div className="skills-wrapper">
        <div className="skill">
          <span>Html5</span>
        </div>
        <div className="skill">
          <span>Css3/Sass/Mui</span>
        </div>
        <div className="skill">
          <span>JS/TS</span>
        </div>
        <div className="skill">
          <span>React js</span>
        </div>
        <div className="skill">
          <span>Next js</span>
        </div>
        <div className="skill">
          <span>RTK/Zustand</span>
        </div>
        <div className="skill">
          <span>Git</span>
        </div>
      </div>
    </section>
  );
}

export default Skills