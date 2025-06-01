// ChefClaude
import image1 from "../assets/images/chef-claude-icon.png";
import { motion } from "framer-motion";
const ChefClaudeHeader = () => {
  return (
    <>
      <header className="flex flex-col  items-center mb-10 py-5 shadow-lg gap-2 bg-[#ffff] justify-center">
        <motion.div initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }} className="flex items-center gap-2">
          <img
            src={image1}  
            alt="chefClaudeLogo"
            className="h-[50px] w-[50px]"
          />
          <span className="text-black text-[24px] font-[400]  font-title">
            Chef Tee
          </span>
        </motion.div>
       <motion.div  initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}>
        <h1 className="text-black text-lg font-[400]  font-title">
          Your AI Cooking Assistant
        </h1>
        
       </motion.div>
      </header>
    </>
  );
};

const Header = () => {
  return (
    <>
      <ChefClaudeHeader />
    </>
  );
};

export default Header;
