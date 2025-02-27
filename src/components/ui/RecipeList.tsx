import { useQuery } from '@tanstack/react-query';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';
import { getAllRecipes } from '../../api/recipeApi';
import { Recipe } from '../../types';
import { Label } from './label';

export const RecipeList = () => {
  const { data: recipes } = useQuery<Recipe[], Error>({
    queryKey: ['recipes'],
    queryFn: getAllRecipes,
  });

  return (
    <>
      <div className="flex flex-col gap-2">
        <Label>Recipes ({recipes?.length})</Label>
        <div className="grid grid-cols-1 gap-4">
          {recipes?.map((recipe) => (
            <Card key={recipe.id}>
              <CardHeader>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.description}</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter></CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
