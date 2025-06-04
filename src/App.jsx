


import {  useEffect } from "react";
import ChefClaude from "./pages/ReactState/ChefClaude";

export default function App() {
  useEffect(()=>{
    document.title = "Chef Tee - Your AI Cooking Assistant";
  },[])


  return (
    <>
     
      <ChefClaude/>
      
       
    </>
  );
}
