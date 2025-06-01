// what needs to be done
// put the useeffect in the ingredient list component
// the useffect array dependency will lsiten for a change on get the data from the api call

import { useEffect } from "react";
import { motion } from "framer-motion";
const containerVariantss = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 2, duration: 2 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const IngredientList = (prop) => {
 useEffect(() => {
  if (
    typeof prop.recipe === "string" &&
    prop.recipe.length > 0 &&
    prop.getRef?.current !== null
  ) {
    prop.getRef.current.scrollIntoView({ behavior: "smooth" });
  }
}, [prop.recipe, prop.getRef]);
  const ingredientsListItems = prop.ingredients.map((ingredient) => (
    <motion.li
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="text-xl list-disc marker:text-xl marker:text-[#475566] text-black"
      key={ingredient}
    >
      {ingredient}
    </motion.li>
  ));
  return (
    <>
      <div className="flex flex-col mb-10 ">
        <motion.h1
          className="mb-5 text-3xl font-bold font-title text-[#151412]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          Ingredients on hand:
        </motion.h1>
        {/* List of Ingredients */}

        <ul className="px-7 space-y-4 text-[#757F8B]">
          {ingredientsListItems}
        </ul>
      </div>
      {prop.ingredients.length >= 4 && (
        <>
          {/* AI section   */}
          <motion.div
            variants={containerVariantss}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-gray-200 p-5 rounded-lg md:w-[31rem] flex items-center justify-center h-32 w-[18rem]"
          >
            <div className="space-y-2" ref={prop.getRef}>
              <h1 className="font-bold md:text-lg">Ready for a recipe?</h1>
              <p className="flex pr-4">
                {" "}
                Generate a recipe from your list of ingredients
              </p>
            </div>
            <div>
              {prop.loading ? (
                <button className="text-white btn btn-active btn-error">
                  <span className="loading loading-spinner"></span>
                </button>
              ) : (
                <button
                  className="text-white btn btn-active btn-error"
                  onClick={prop.getRecipe}
                >
                  Get a Recipe
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default IngredientList;
