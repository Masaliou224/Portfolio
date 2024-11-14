import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const skills = ['JavaScript', 'React', 'TypeScript', 'PHP', 'Laravel', 'Tailwind', 'Next', 'WordPress'];

  return (
    <section id="skills">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="section">
          <div className="profile">
            <h2>Get to know me !</h2>
            <p>
              I'm a fullstack developer with a real passion for building web applications using modern tools like React and Laravel.
              I'm currently working as a junior developer. Check out some of my work in the Projects section.
              <br />
              <br />
              I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
            </p>
          </div>
          <div className="skills-section">
            <h2>Skills</h2>
            <div className="skills">
              {skills.map((skill, index) => (
                <div key={index} className="skill">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;