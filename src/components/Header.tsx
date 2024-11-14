import { motion } from "framer-motion";
import CV from "../assets/CV.png"

const Header: React.FC = () => {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav>
        <div className="profile-name">
          <img src={CV} alt="Profile" />
          <h1>Mamadou Saliou Diallo</h1>
        </div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;