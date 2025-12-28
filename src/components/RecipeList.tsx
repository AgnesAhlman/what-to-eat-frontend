import { useQuery } from '@tanstack/react-query';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { getAllRecipes } from '../api/recipeApi';
import { Recipe } from '../types';
import { Label } from './ui/label';
import { useRouter } from '@tanstack/react-router';

type Prop = {
  inputText: string;
};

export const RecipeList = ({ inputText }: Prop) => {
  const { data: recipes } = useQuery<Recipe[], Error>({
    queryKey: ['recipes'],
    queryFn: getAllRecipes,
  });
  const router = useRouter();

  const filteredDataOnSearch = recipes?.filter(
    (recipe) =>
      recipe.title.toLocaleLowerCase() === inputText.toLocaleLowerCase()
  );
  return (
    <>
      <div className="flex flex-col gap-2 mt-4">
        <Label className="mb-4">Recipes({recipes?.length})</Label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredDataOnSearch?.map((recipe) => (
            <Card
              key={recipe.id}
              className="cursor-pointer"
              onClick={() =>
                router.navigate({
                  to: `/recipe/${recipe.id}`,
                })
              }
            >
              <CardHeader>
                <CardTitle>{recipe.title}</CardTitle>
              </CardHeader>
              <CardContent>{recipe.description}</CardContent>
              <CardFooter></CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
