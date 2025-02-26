import { Recipe } from '../types';

export const getAllRecipes = async (): Promise<Recipe[]> => {
  const response = await fetch('http://localhost:5034/api/Recipe');

  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }

  const data: Recipe[] = await response.json();
  return data;
};
