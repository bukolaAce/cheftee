/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import Recipe from "./Recipe";
import IngredientList from "./IngredientList";
import { getRecipeFromMistral } from "../Data/ai";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
// Chef Claude
const ChefClaudeComponent = () => {
  const [ingredients, setIngredients] = useState([]);
  const getRef = useRef(null);

  const [recipeShown, setRecipeShown] = useState(false);
  const [recipe, setRecipe] = useState("");
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  async function getRecipe() {
    setLoading(true);
    setRecipeShown((prevShown) => !prevShown);
    const recipeMarkDown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkDown);
    setLoading(false);
  }

  useEffect(() => {
    if (check) {
      toast("Input at Least Four Ingredients");
    }
  }, [check]);

  const handleSubmit = (formData) => {
    const spice = formData.get("ingredient");

    if (spice.length === 0) {
      setCheck(true);
    } else {
      setIngredients((prev) => {
        const updatedIngredients = [...prev, spice];

        if (updatedIngredients.length >= 4) {
          setCheck(true); // Immediately set check to true
          setTimeout(() => setCheck(false), 5000); // Then set it to false after 3 seconds
        }

        return updatedIngredients;
      });
    }
  };

  // Hugging Face API call

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#ffff] md:px-96 md:justify-start md:items-start">
        <motion.form
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          action={handleSubmit}
          className="flex flex-col gap-2 mt-5 mb-2 sm:flex-row"
        >
          <div className="mb-5">
            <input
              type="text"
              placeholder="Input at least 4 ingredients"
              className="w-full max-w-xs input input-bordered focus:outline-none"
              name="ingredient"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-[#151412] btn btn-wide hover:bg-[#27292c] border-none"
          >
            + Add ingredient
          </button>
          <ToastContainer
           theme="dark"
          />
        </motion.form>

        {ingredients.length > 0 && (
          <>
            <IngredientList
              ingredients={ingredients}
              getRecipe={getRecipe}
              getRef={getRef}
              recipe={recipe}
              loading={loading}
            />
          </>
        )}
        {/* show recipe */}

        {recipeShown && ingredients.length >= 4 ? (
          <Recipe recipe={recipe} getRef={getRef} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

const MainComponent = (props) => {
  return <ChefClaudeComponent props={props} />;
};

export default MainComponent;
