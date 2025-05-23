/* eslint-disable react/prop-types */

import { useRef, useState } from "react";

import Recipe from "./Recipe";
import IngredientList from "./IngredientList";
import { getRecipeFromMistral } from "../Data/ai";

// Chef Claude
const ChefClaudeComponent = () => {
  const [ingredients, setIngredients] = useState([]);
  const getRef = useRef(null);

  const [recipeShown, setRecipeShown] = useState(false);
  const [recipe, setRecipe] = useState("");
  async function getRecipe() {
    setRecipeShown((prevShown) => !prevShown);
    const recipeMarkDown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkDown);
  }

  const handleSubmit = (formData) => {
    const spice = formData.get("ingredient");
    if (spice.length === 0) return;
    else {
      setIngredients((prev) => [...prev, spice]);
    }
  };

  // Hugging Face API call

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#ffff] md:px-96 md:justify-start md:items-start">
        <form
          action={handleSubmit}
          className="flex flex-col gap-2 mt-5 mb-2 sm:flex-row"
        >
          <input
            type="text"
            placeholder="input at least 4 ingredients"
            className="w-full max-w-xs input input-bordered focus:outline-none"
            name="ingredient"
          />
          <button
            type="submit"
            className="text-white bg-[#151412] btn btn-wide hover:bg-[#27292c] border-none"
          >
            + Add ingredient
          </button>
        </form>
         
          
      
        {ingredients.length > 0 && (
          <>
            <IngredientList
              ingredients={ingredients}
              getRecipe={getRecipe}
              getRef={getRef}
              recipe={recipe}
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
