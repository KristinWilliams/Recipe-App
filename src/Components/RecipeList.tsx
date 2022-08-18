import React, { useEffect, useState } from "react";

// const RecipeList: any = () => {
//   const [recipes, setRecipes] = useState<any>([]);
//   const getRecipe = async () => {
//     try {
//       await fetch(
//         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&type=main%20course`
//       )
//         .then((res) => res.json())
//         .then((data) => setRecipes(data.results));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetch(
//       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&type=main%20course`
//     )
//       .then((res) => res.json())
//       .then((data) => setRecipes(data.results));
//   });

//   return (
//     <div>
//       {recipes.map((recipe: any) => (
//         <div>
//           <h1>{recipe.title}</h1>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RecipeList;
