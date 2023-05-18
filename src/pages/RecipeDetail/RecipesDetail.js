import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();
  return <div>Recipe {id}</div>;
};

export default RecipeDetails;
