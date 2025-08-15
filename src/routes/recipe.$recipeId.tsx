import { SingleRecipe } from '@/pages/Recipe';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/recipe/$recipeId')({
  component: SingleRecipe,
});
