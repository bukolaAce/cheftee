/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import ReactMarkdown from 'react-markdown'
const Recipe = ({recipe}) => {
 

  return <section className="my-4 text-xl prose text-black"><ReactMarkdown>{recipe}</ReactMarkdown></section>;
};

export default Recipe;
