import { getRecipe } from '@/api/recipeApi';
import { Route } from '@/routes/recipe.$recipeId';
import { Recipe } from '@/types';
import { useQuery } from '@tanstack/react-query';

export const SingleRecipe = () => {
  const { recipeId } = Route.useParams();

  const { data: recipe } = useQuery<Recipe, Error>({
    queryKey: ['recipes', recipeId],
    queryFn: () => getRecipe(recipeId),
  });
  return <p>{recipe?.description}</p>;
};
