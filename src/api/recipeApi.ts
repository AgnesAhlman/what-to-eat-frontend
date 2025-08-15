import { Recipe } from '../types';

export const getAllRecipes = async (): Promise<Recipe[]> => {
  const response = await fetch('http://localhost:5238/api/Recipe');

  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }

  const data: Recipe[] = await response.json();
  return data;
};

export const getRecipe = async (id: string): Promise<Recipe> => {
  const response = await fetch(`http://localhost:5238/api/Recipe/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch recipe with id ${id}`);
  }

  const data: Recipe = await response.json();
  return data;
};
