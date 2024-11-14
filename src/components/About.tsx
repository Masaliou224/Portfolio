import Skills from "./Skills";

const About: React.FC = () => {
  return (
    <section>
      <h2>About Me</h2>
      <p>
        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
      </p>
      <Skills />
    </section>
  );
};

export default About;