import { Input } from '../components/ui/input';
import { RecipeList } from '../components/RecipeList';
import { useState } from 'react';
export const Home = () => {
  const [inputText, setInputText] = useState('');

  const getInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  return (
    <div className="flex flex-col items-center p-2">
      <section className="flex flex-col gap-4 w-full p-2">
        <Input
          name="search-recipe"
          placeholder="Search for recipes"
          className="bg-accent w-full md:max-w-2/5"
          onChange={(e) => getInput(e)}
        />
        <RecipeList inputText={inputText} />
      </section>
    </div>
  );
};
