import { Input } from '../components/ui/input';
import { RecipeList } from '../components/RecipeList';
export const Home = () => {
  return (
    <div className="flex flex-col items-center p-2">
      <section className="flex flex-col gap-4 w-full p-2">
        <Input
          name="search-recipe"
          placeholder="Search for recipes"
          className="bg-accent w-full md:max-w-2/5"
        />
        <RecipeList />
      </section>
    </div>
  );
};
