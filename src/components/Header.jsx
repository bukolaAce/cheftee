// ChefClaude
import image1 from "../assets/images/chef-claude-icon.png";
const ChefClaudeHeader = () => {
  return (
    <>
      <header className="flex flex-col  items-center mb-10 py-5 shadow-lg gap-2 bg-[#ffff] justify-center">
        <div className="flex items-center gap-2">
          <img
            src={image1}  
            alt="chefClaudeLogo"
            className="h-[50px] w-[50px]"
          />
          <span className="text-black text-[24px] font-[400]  font-title">
            Chef Tee
          </span>
        </div>
       <div>
        <h1 className="text-black text-lg font-[400]  font-title">
          Your AI Cooking Assistant
        </h1>
        
       </div>
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
