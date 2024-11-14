import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="hero"
    >
      <div className="div">
        <h1>Hi, i'm Saliou.</h1>
        <h2>A fullstack web developer.</h2>
        <p></p>
      </div>
      Let's Connect!
    </motion.section>
  );
};

export default Hero;